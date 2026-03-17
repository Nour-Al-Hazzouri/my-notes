function setupPdfViewers() {
  const viewers = document.querySelectorAll<HTMLElement>(".pdf-viewer")
  if (viewers.length === 0) return

  // Load PDF.js from CDN
  const pdfjsVersion = "4.0.379"
  const cdnBase = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsVersion}`

  // Check if pdfjsLib is already loaded
  if (!(window as any).pdfjsLib) {
    const script = document.createElement("script")
    script.src = `${cdnBase}/pdf.min.mjs`
    script.type = "module"

    // We need to use a classic script approach since inline scripts can't use dynamic imports easily
    const loaderScript = document.createElement("script")
    loaderScript.type = "module"
    loaderScript.textContent = `
      import * as pdfjsLib from '${cdnBase}/pdf.min.mjs';
      pdfjsLib.GlobalWorkerOptions.workerSrc = '${cdnBase}/pdf.worker.min.mjs';
      window.pdfjsLib = pdfjsLib;
      window.dispatchEvent(new Event('pdfjsReady'));
    `
    document.head.appendChild(loaderScript)
  }

  function initViewer(container: HTMLElement) {
    const link = container.querySelector("a")
    if (!link) return
    const pdfUrl = link.href

    const pdfjsLib = (window as any).pdfjsLib
    if (!pdfjsLib) return

    // Clear loading message
    container.innerHTML = ""

    // Create viewer UI
    const controls = document.createElement("div")
    controls.className = "pdf-controls"
    controls.innerHTML = `
      <button class="pdf-prev" aria-label="Previous page">‹ Prev</button>
      <span class="pdf-page-info">Page <span class="pdf-page-num">1</span> of <span class="pdf-page-count">-</span></span>
      <button class="pdf-next" aria-label="Next page">Next ›</button>
      <a href="${pdfUrl}" class="pdf-download" download>↓ Download</a>
    `
    container.appendChild(controls)

    const canvasContainer = document.createElement("div")
    canvasContainer.className = "pdf-canvas-container"
    const canvas = document.createElement("canvas")
    canvasContainer.appendChild(canvas)
    container.appendChild(canvasContainer)

    const ctx = canvas.getContext("2d")!
    let pdfDoc: any = null
    let pageNum = 1

    const pageNumEl = controls.querySelector(".pdf-page-num")!
    const pageCountEl = controls.querySelector(".pdf-page-count")!

    function renderPage(num: number) {
      pdfDoc.getPage(num).then((page: any) => {
        // Scale to fit container width
        const containerWidth = canvasContainer.clientWidth || 700
        const unscaledViewport = page.getViewport({ scale: 1 })
        const scale = containerWidth / unscaledViewport.width
        const viewport = page.getViewport({ scale })

        canvas.height = viewport.height
        canvas.width = viewport.width

        page.render({ canvasContext: ctx, viewport })
        pageNumEl.textContent = String(num)
      })
    }

    // Resolve the URL relative to the current page
    const resolvedUrl = new URL(pdfUrl, window.location.href).href

    pdfjsLib.getDocument(resolvedUrl).promise.then((pdf: any) => {
      pdfDoc = pdf
      pageCountEl.textContent = String(pdf.numPages)
      renderPage(1)
    }).catch(() => {
      container.innerHTML = `<p>Failed to load PDF. <a href="${pdfUrl}" download>Download it here</a>.</p>`
    })

    controls.querySelector(".pdf-prev")!.addEventListener("click", () => {
      if (pageNum <= 1) return
      pageNum--
      renderPage(pageNum)
    })
    controls.querySelector(".pdf-next")!.addEventListener("click", () => {
      if (!pdfDoc || pageNum >= pdfDoc.numPages) return
      pageNum++
      renderPage(pageNum)
    })
  }

  function initAllViewers() {
    const viewers = document.querySelectorAll<HTMLElement>(".pdf-viewer")
    viewers.forEach(initViewer)
  }

  if ((window as any).pdfjsLib) {
    initAllViewers()
  } else {
    window.addEventListener("pdfjsReady", initAllViewers, { once: true })
  }
}

document.addEventListener("nav", setupPdfViewers)
