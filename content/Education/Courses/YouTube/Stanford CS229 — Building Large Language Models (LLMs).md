# Building Large Language Models (LLMs)

> Stanford CS229 Guest Lecture · [Video](https://youtu.be/9vM4p9NN0Ts)

---

## What Matters When Training LLMs

Five key components drive LLM development:

| Component | Notes |
|---|---|
| **Architecture** | The neural network design (transformer-based) |
| **Training loss & algorithm** | How the model is optimized |
| **Data** | What the model is trained on |
| **Evaluation** | How progress is measured |
| **Systems** | How models run efficiently on hardware |

> **Practical reality:** Industry focuses most on **data, evaluation, and systems**. Academia tends to over-focus on architecture and training algorithms, but architectural differences (e.g., new activations) mostly shift the intercept of a scaling law — not its slope. Adding compute eventually outweighs those gains.

---

## Part I — Pretraining

### Language Modeling

A language model is a probability distribution over sequences of tokens:

$$P(x_1, x_2, \ldots, x_L)$$

- "The mouse ate the cheese" → high probability
- "The the mouse ate cheese" → lower (grammar error)
- "The cheese ate the mouse" → even lower (semantic error)

### Autoregressive Language Models

Decompose the joint distribution using the chain rule — **no approximation**:

$$P(x_1, \ldots, x_L) = \prod_{t=1}^{L} P(x_t \mid x_1, \ldots, x_{t-1})$$

- At inference: generate token-by-token (sequential for loop — a known bottleneck)
- At training: compare predicted distribution to the one-hot real token

### Training Loss

**Cross-entropy loss** on the next token prediction. Minimizing loss = maximizing log-likelihood of the text.

**Forward pass pipeline:**

1. Tokenize input
2. Embed each token → vector
3. Pass through transformer → contextual representations
4. Linear layer → logits over vocabulary
5. Softmax → probability distribution over next token

---

### Tokenization

Words alone are insufficient: typos break word-level tokenization, languages like Thai have no spaces, and character-level produces sequences too long for transformers (quadratic complexity).

**Byte Pair Encoding (BPE)** — one of the two most common tokenizers:

1. Start with a large corpus; assign each character its own token
2. Repeatedly find and merge the most frequent adjacent token pair
3. Continue until a vocabulary of the desired size is reached
4. Smaller tokens (characters) are kept alongside merged ones (for handling typos)
5. At inference: always choose the **longest** matching token

**Vocabulary size** = output dimensionality of the model. Average token ≈ 3–4 characters.

**Drawbacks of current tokenization:**

- Numbers are often tokenized as whole units (e.g., `327` → one token), preventing digit-level composition needed for arithmetic
- Code indentation (Python's 4 spaces) was tokenized poorly before GPT-4's changes
- Character/byte-level tokenization would be preferable architecturally but is expensive due to sequence length

---

### Evaluation — Perplexity

$$\text{Perplexity} = 2^{\bar{H}}$$

where $\bar{H}$ is the average per-token cross-entropy loss.

- **Range:** 1 (perfect prediction) to vocabulary size (random guessing)
- **Intuition:** Number of tokens the model "hesitates between" at each step
- **Progress:** Standard benchmarks went from ~70 perplexity (2017) to <10 (2023)

**Why perplexity is no longer used for academic benchmarking:**

- Depends on the tokenizer (different vocabulary sizes make models incomparable)
- Depends on the evaluation dataset

Still widely used **internally** during training for development feedback.

### Evaluation — Benchmark Suites

Common automatically evaluatable benchmarks:

- **HELM** (Stanford) — aggregates many NLP tasks
- **Hugging Face Open LLM Leaderboard**
- **MMLU** — multiple-choice Q&A across domains (college medicine, physics, astronomy, etc.)

**How MMLU evaluation works:**

- Option A: Score the likelihood of the full answer text for each choice; pick highest
- Option B: Ask the model "A, B, C, or D?" and look only at those four token probabilities

**Evaluation challenges:**

1. **Inconsistent methodology** — the same benchmark (e.g., MMLU) can yield wildly different scores depending on how it is prompted or scored (Llama-65B: 63.7% on HELM vs. 48.8% on another setup)
2. **Train/test contamination** — unknown for closed models; one detection trick: if a model assigns higher likelihood to examples in their original dataset order (vs. shuffled), they were likely in training

---

### Data

#### Collection Pipeline

1. **Web crawl** — Use Common Crawl (~250 billion pages, ~1 petabyte). Companies rarely write their own crawlers.
2. **Extract text from HTML** — Remove boilerplate (headers, footers, menus), extract math (challenging)
3. **Filter undesirable content** — NSFW, harmful content, PII; maintain URL blacklists; train small classifiers
4. **De-duplication** — Remove duplicate URLs, repeated paragraphs (common in scraped books/forums)
5. **Heuristic filtering** — Flag documents with outlier token distributions, unusually short or long lengths, etc.
6. **Model-based quality filtering** — Train a classifier on Wikipedia + its outbound links as "high quality"; use it to up-weight similar web content
7. **Domain classification & weighting** — Classify into domains (code, books, Wikipedia, entertainment, etc.) and adjust mixture:
   - **Up-weight:** Code (improves reasoning), Books, Wikipedia
   - **Down-weight:** Entertainment
8. **High-quality cooldown** — At the end of training, decrease learning rate and fine-tune on curated high-quality data (Wikipedia, human-collected text) → controlled overfitting toward quality

#### Data Scale

| Dataset | Tokens |
|---|---|
| Early academic (e.g., The Pile) | ~150B–280B tokens |
| Llama 2 | ~2T tokens |
| Llama 3 / GPT-4 (est.) | ~13–15T tokens |

The Pile composition includes: arXiv, PubMed, Wikipedia, Stack Exchange, GitHub, books.

#### Open Problems in Data

- Efficient processing at petabyte scale
- Optimal domain mixing
- Synthetic data generation (insufficient real data)
- Multimodal data for improving text performance
- Copyright liability → companies rarely disclose training sources

---

### Scaling Laws

Empirically established since ~2020: **loss decreases as a power law with compute, data, and parameters** — on a log-log scale, the relationship is linear.

$$\log(\text{Loss}) \propto -\alpha \log(\text{Compute})$$

**Key insight:** No overfitting with LLMs. Larger models consistently perform better.

**Uses of scaling laws:**

- Predict future model performance without training at full scale
- Compare architectures (e.g., Transformers vs. LSTMs) at small scale, then extrapolate
- Tune hyperparameters on small models, apply the recipe to large ones
- Decide optimal allocation of compute budget

#### The Chinchilla Result

**Optimal training-compute allocation (Chinchilla paper):**

$$\text{Optimal tokens} \approx 20 \times \text{number of parameters}$$

- This is the training-optimal ratio (minimizes loss for a given compute budget)
- **Inference-optimal ratio:** ~150 tokens/parameter — prefer smaller models that cost less to serve

#### The Bitter Lesson (Richard Sutton, 2019)

Scaling laws + Moore's law imply: the only thing that matters long-term is **architectures that can leverage computation**. Small architectural tricks (new activations, etc.) only shift the intercept; scale dominates.

#### Back-of-Envelope: Llama 3 405B

| Item | Value |
|---|---|
| Parameters | 405B |
| Training tokens | 15.6T |
| Tokens/parameter ratio | ~40 (between Chinchilla-optimal and inference-optimal) |
| Compute (approx.) | $6 \times N \times D \approx 3.8 \times 10^{25}$ FLOPs |
| Hardware | 16,000 H100s |
| Training time | ~70 days (~26–30M GPU-hours) |
| Estimated cost | ~$52M GPU rental + ~$25M salaries ≈ **$75M** |
| CO₂ emitted | ~4,000 tons CO₂ equivalent (~2,000 transatlantic flights) |

> Biden executive order threshold: $10^{26}$ FLOPs. Llama 3 405B was trained at ~$3.8 \times 10^{25}$ — just under the limit.

---

## Part II — Post-Training

Post-training transforms a raw language model into an AI assistant. A pure language model (e.g., GPT-3) given "Explain the moon landing to a 6-year-old" would continue with another similar question, not an answer.

**Goal:** Make LLMs follow user instructions and exhibit desired behaviors (helpfulness, safety).

---

### Step 1 — Supervised Fine-Tuning (SFT)

**Method:** Fine-tune the pretrained LLM using the **same cross-entropy loss** on (instruction, ideal response) pairs collected from humans.

**Data collection:**

- Humans write question + ideal answer pairs
- Example platform: Open Assistant (crowdsourced)
- **Stanford Alpaca:** used 175 human seed examples + GPT-3 (`text-davinci-003`) to generate 52,000 synthetic Q&A pairs; fine-tuned Llama 7B → Alpaca 7B

**Key findings:**

- SFT does **not** require much data — scaling from 2,000 to 32,000 examples shows little gain (LIMA paper)
- **Why:** SFT does not teach new knowledge. It only selects a user type (the assistant persona) that the model already encountered in pretraining. The pretrained model has the knowledge; SFT tells it *which* mode to operate in.
- SFT is just a different data regime. Pretraining acts as the **weight initialization**; SFT is the actual training from that initialization.

**Hyperparameters:** Learning rate is reset/increased (e.g., 1e-5); all weights are fine-tuned in industry (LoRA used in open-source settings to update only low-rank weight deltas).

**Problems with SFT:**

1. **Bounded by human ability** — humans are better at judging outputs than producing them
2. **Hallucination** — if a human includes a reference the model never saw in pretraining, the model learns to generate plausible-sounding references, not real ones
3. **Cost** — generating ideal answers at scale is expensive

---

### Step 2 — Reinforcement Learning from Human Feedback (RLHF)

**Core idea:** Instead of cloning human behavior, **maximize human preference**.

**Pipeline:**

1. Generate two responses to the same prompt using a fine-tuned LLM
2. Ask human labelers: which response is preferred?
3. Train the model to generate more of the preferred response

#### Option A — PPO (Proximal Policy Optimization)

The original ChatGPT approach:

1. Train a **reward model** (RM): a classifier taking (input, output) → scalar reward
2. Use the **Bradley-Terry model**: $P(y_1 \succ y_2) = \sigma(r_1 - r_2)$; train RM on human preferences
3. Run PPO with the RM as the reward signal, plus a KL-divergence penalty to prevent reward overoptimization

**Issues:**

- Complex implementation (rollouts, clipping, outer loops)
- After PPO, the model is no longer a proper distribution — it is a policy; likelihoods are no longer meaningful

#### Option B — DPO (Direct Preference Optimization)

Proposed at Stanford; mathematically equivalent to PPO at the global optimum but far simpler.

$$\mathcal{L}_\text{DPO} = -\mathbb{E}\left[\log \sigma\left(\beta \log \frac{\pi_\theta(y_w \mid x)}{\pi_\text{ref}(y_w \mid x)} - \beta \log \frac{\pi_\theta(y_l \mid x)}{\pi_\text{ref}(y_l \mid x)}\right)\right]$$

In plain terms: **maximize** the likelihood of preferred responses, **minimize** the likelihood of rejected responses. No reward model, no RL loop — just maximum likelihood.

**DPO is now the standard** in open-source (and reportedly in much of industry).

#### RLHF Data Scale

| Stage | Typical data size |
|---|---|
| SFT | 5K–50K examples |
| RLHF (preference pairs) | ~1M examples |
| Pretraining | ~15T tokens |

#### Challenges of Human Labeling for RLHF

- Slow and expensive (~$300 per 1,000 examples on Mechanical Turk)
- Humans agree with each other only ~66% of the time on binary preference tasks
- Humans default to surface features: **longer answers are consistently preferred**, causing RLHF-trained models to be verbose (length bias)
- Annotator distribution shift and crowdsourcing ethics concerns

#### LLM-as-Judge (AlpacaFarm)

Replace human labelers with an LLM judge:

- Models are >50× cheaper than humans and achieve **higher agreement** with the human majority than individual humans do (lower variance, slightly more biased toward the mode)
- **AlpacaEval leaderboard:** 98% correlation with ChatbotArena; costs <$10, runs in <3 minutes

**Length bias remains:** LLM judges also prefer longer outputs; mitigated using causal inference / regression controlling for length.

---

### Evaluation of Post-Training Models

Challenges:

- Cannot use validation loss (PPO and DPO losses are incomparable)
- Cannot use perplexity — models post-RLHF are policies, not calibrated distributions; the theoretical optimum of a PPO-trained model collapses to a near-delta distribution
- Questions are open-ended and diverse; no single correct answer

**ChatbotArena:** Random internet users blindly compare two chatbots and rate which is better. Most trusted public benchmark, but biased toward tech-savvy questions and slow/expensive for development use.

**AlpacaEval:** Automated LLM-judge evaluation against a baseline model (e.g., ChatGPT); reports win rate. 98% correlation with ChatbotArena.

---

## Part III — Systems

### Why Systems Matter

Compute is the primary bottleneck. Simply buying more GPUs is constrained by:

- Cost and scarcity (supply-limited even with budget)
- Inter-GPU communication overhead

**Model FLOP Utilization (MFU):** observed throughput / theoretical maximum. Meta's Llama trained at ~45% MFU — even at scale, GPUs sit idle much of the time due to memory/communication bottlenecks. 50% MFU is considered very good.

### GPU Fundamentals

- **GPU:** optimized for **throughput** — one instruction on many cores simultaneously (SIMD); best for matrix multiplication
- **CPU:** optimized for **latency** — complex control flow, fewer cores
- Compute improvement has outpaced memory bandwidth improvement → communication is the bottleneck, not computation

**Memory hierarchy:** Closer to cores = faster but smaller (registers / shared memory / L2 / DRAM)

### Key Optimization Techniques

#### Low Precision (Mixed Precision Training)

Instead of FP32 everywhere:

- **Weights stored in FP32** for precision during parameter updates (small learning rates require fine-grained weight deltas)
- **Forward/backward pass computed in FP16 (BF16)** — halves memory bandwidth, speeds communication
- Deep learning gradients already have noise; exact precision past 16 bits is irrelevant

This is the standard today (**automatic mixed precision / AMP**).

#### Operator Fusion (Kernel Fusion)

Naive PyTorch: each operation triggers a round-trip between DRAM and GPU compute cores (load → compute → store → repeat).

**Fused kernels:** batch multiple operations into one round-trip (load once → compute all → store once).

```python
# ~2× speedup; rewrites PyTorch ops into fused CUDA/C++ kernels
torch.compile(model)
```

#### Other Important Techniques (Not cOvered in dEpth)

- **Tiling** — efficient use of GPU shared memory
- **Tensor/pipeline/data parallelism** — distributing computation across multiple GPUs
- **Mixture of Experts (MoE)** — conditional computation; only a subset of parameters activate per token

---

## Topics Not Covered

- Transformer architecture (covered in a separate CS229 lecture)
- Inference optimization (speculative decoding, quantization, KV caching)
- Multimodal LLMs
- Legal / copyright issues in data collection
- UI/product design

---

## Recommended Stanford Courses

| Course | Focus |
|---|---|
| **CS224N** | NLP foundations and historical context for LLMs |
| **CS324** | Large Language Models — in-depth lectures and readings |
| **CS336** | Build your own LLM from scratch (heavy workload) |
