## Day 1: Use Layers and Masks in Photoshop

### Getting Started
After choosing a photo, press `F` for full screen view.

### General Overview

#### Interface Layout
- **Left side**: Tools panel
- **Top area**: Options for tools
- **Right side**: Palettes
- **Very top**: File menu

### Tools Panel

#### Essential Tools
| Tool | Shortcut | Description |
|------|----------|-------------|
| **Move Tool** | `V` | Move layers around |
| **Selection Tools** | `M`, `L`, `W` | Select certain areas; when an area is selected, you can only edit in that area |
| **Crop Tool** | `C` | Change the size of your image |
| **Eyedropper Tool** | `I` | Select certain colors |
| **Removing Objects** | `J`, `S` | Remove objects from images |
| **Brush Tool** | `B` | Paint on images |
| **Gradient Tool** | `G` | Add gradients |
| **Blur Tool** | | Blur any area of your image |
| **Pen Tool** | `P` | Make advanced selections |
| **Custom Shape Tool** | `U` | Create shapes |
| **Rotate View Tool** | `R` | Rotate and zoom in and out |
| **Color Pickers** | | Choose a color |

### General Information

#### Working with Palettes
- A palette can be made to appear permanently by dragging it to another section of the screen
- Two or more palettes can be combined under the same menu
- Palettes can be collapsed and expanded
- Palettes can be returned to their original location

#### Tools Options
- When a tool is selected, corresponding options appear in the options bar
- More control over your photograph is available in the Palettes bar
- If you can't find something in the palettes due to different versions of Photoshop, check the Window tab

#### Histogram
The histogram shows the color and light information in the photograph:
- Spike on the right side: photograph is bright
- Spike on the left side: photograph is dark

#### Character Menu
Lets you adjust font faces, font heights, colors, and other text properties.

#### Workspaces
You can save workspaces from the Window tab where you can specify what you want to be part of your workspace:
- Keyboard and shortcuts
- Menus
- Toolbar

> 💡 **Tip:** The next time you want to work in the same workspace, select it from the Window menu.

### Working with Layers
One of the core features in Photoshop.

#### Creating Layers
To work with layers, create a new layer by pressing on the `+` icon.

> 📝 **Note:** By making another layer, you have the freedom to edit without affecting the original image, since the second layer can be turned off and on.

### Menu Systems
The menu systems provide access to more advanced controls and file management.

> 💡 **Tip:** The Help tab is powerful since you can use it to search for features you struggle to find.

---

## Day 2: Opening, Editing, and Saving in Photoshop

### Combining Documents

#### Steps to Combine Documents
1. Open two photos (they will appear as tabs)
2. Drag the tabs to appear as two windows if desired
3. To combine documents:
   - Use the Move Tool
   - Drag one document into the other (this will copy it)
   - You can also drag it from the layer panel
4. After combining, you can remove the second image by clicking `X`

### Navigating an Image

#### Navigation Shortcuts
- Hold `Space bar` + click and drag to move around the image
- Press `Ctrl` + `+` to zoom in
- Press `Ctrl` + `-` to zoom out
- Press `Ctrl` + `Space` + drag right/left to zoom in/out

### Non-Destructive Editing
In Photoshop, using layers allows you to make edits without affecting the original document.

### Removing an Object

#### Steps to Remove an Object
1. Use the Spot Healing Brush Tool
2. Make sure "Content-Aware" is chosen from the top options
3. Check that "Sample All Layers" is selected

> ⚠️ **Warning:** Make sure to make the edit on a new layer to keep the original photo unchanged.

### Replacing Objects

#### Steps to Replace an Object
1. Select the layer containing the object you want to replace
2. The replacement object might not be the correct size, so transform it using `Ctrl` + `T`
3. If the object appears full screen, blend it using a different mode (e.g., use "Multiply" for a sky)
4. If the object is visible in places it shouldn't be:
   - Use Layer Mask to make it only visible in the correct place
   - Select the Magic Wand and click on the area
   - If the result isn't as intended, raise the tolerance level
   - Press `Shift` + click to make multiple selections
5. Click the Layer Mask to keep the selected area and remove everything else
6. If the color seems off, adjust the opacity

### Saving Files

#### File Formats
- Save your work with layers in `.PSD` or `.TIFF` format
- `.JPG` format is good for web use
- `.PNG` format is used for transparent photos

#### Creating Transparent Images (PNG)
1. From the Select tab, choose Color Range
2. Select as much as you can from the object (use both the eyedropper tool and the one with +)
3. Press `Ctrl` + `J` to duplicate the selection
4. Use the Rectangle Marquee Tool to select the object
   - Use `Shift` + click to select more if needed
5. From the Select tab, press Inverse then Delete to remove everything else
6. Press `Ctrl` + `J` to duplicate it into a new document
7. Select it and crop to create a new object with no background

---

## Day 3: Working with Layers

### Standard Layers

#### Background Layer
- The base layer is always called "Background"
- It has a lock next to it that prevents moving its position
- To move it, you must convert it into a normal layer

#### Working with New Layers
- When you make a new layer and use the Move Tool, nothing will happen initially
- If you make edits on the new layer (e.g., brush strokes), those edits can be moved
- You can change the opacity to make the layer more or less transparent

### Blending Modes
This mode allows objects to blend differently with other images.

> 📝 **Example:** With an image full of citruses, you can use the brush to paint one of them and change the blending mode from Normal to Hue.

### Changing Colors
- The brushed color can be a specific color
- It can also be changed by going to Image → Adjustments → Hue/Saturation

### Duplicating a Subject

#### Steps to Clone an Object
1. Make a new layer
2. Press `S` to choose the Clone Stamp Tool
3. Make sure to sample everything (the layer and what's beneath it) from the options at the top
4. To mark the area to clone:
   - Hold `Alt` + click on it
   - Go to where you want to paint the cloned object and start painting
   - You will notice another marker showing the area you're painting from

### Layer Masks

#### How Layer Masks Work
- Layer masks allow you to undo changes non-destructively
- If the layer mask is completely white, the layer will be completely visible
- If the layer mask is black, the layer will be invisible
- With the Brush Tool:
  - Use black to hide parts of the layer (revert to how it was before)
  - Use white to reveal parts of the layer

#### Layer Mask Tips
- A layer mask can be temporarily hidden by holding `Shift` + clicking on it
- An image can be warped by clicking `Ctrl` + `T` then choosing the Warp option from the top

### Adjustment Layers
- Adjustment layers are a type of layer applied to the whole background
- They can be chosen from Layer → New Adjustment Layer
- You can change the order of layers to control which adjustments affect which parts of the image
- Everything explained about layer masks also applies to adjustment layers

### Type (Text) Layers

#### Working with Text
- Press `T` to use the Type Tool
- Press `Ctrl` + `Enter` to confirm edits
- Adjustments can be made from the Character menu in the Properties panel (activate from Window menu)

#### Text and Brush Techniques
- To make part of the text covered by the image, use the Brush Tool
- Press `X` to switch between black and white
- Hold `Alt` + click to sample a color
- Right-click to adjust brush options
- Hold `Ctrl` + `Alt` + right-click and drag:
  - Up/down to make the brush thicker/lighter
  - Left/right to make it bigger/smaller

### Clipping Masks
- To create a clipping mask, right-click a layer and choose "Create Clipping Mask"
- A clipping mask helps you brush a specific area of the photo depending on the position of the layer
- This allows you to brush on top of one object without affecting another object

---

## Day 4: How to Use Adjustment Layers

### Adjustment Layers Overview
Adjustment layers are ways to edit non-destructively in Photoshop. They can be used to change exposure, colors, and light levels.

#### Ways to Create Adjustment Layers
1. Through the Layer tab
2. Through the Window tab (choose Adjustments)
3. From the Layers panel, using the circle icon

### Types of Adjustment Layers

#### 1. Brightness/Contrast
- Not used as frequently because similar adjustments can be made through Curves and Levels
- Useful for basic brightness/contrast adjustments
- Opacity can be adjusted to make the effect less or more intense
- Layer masks can be used to affect only parts of the image

#### 2. Levels
- Adjust the black point (moving left makes the image darker)
- Adjust the white point (everything to the right becomes completely white)
- Adjust the middle point to make values whiter or darker
- Press `Ctrl` + `I` to invert the mask (making it black and invisible)
- Use the Brush to make the adjustment visible in specific areas

#### 3. Curves
- Adjust dark points to make them darker or brighter
- Adjust white points and mid-points similarly
- Both Levels and Curves allow editing of individual color channels:
  - RGB (default)
  - Red
  - Green
  - Blue

#### 4. Vibrance
- Contains both Vibrance and Saturation sliders
- For images with people, Vibrance is better than Saturation as it makes skin colors more natural

#### 5. Hue/Saturation
- Allows for color changes in the image
- Instead of adjusting all colors (Master), you can target specific colors
- Use the eyedropper to choose the color from the image
- Use layer masks to control which parts of the image are affected

#### 6. Color Balance
- Edit colors in shadows, midtones, and highlights

#### 7. Black and White
- Converts image to black and white
- Allows you to choose the white levels in your image

#### 8. Photo Filters
- Choose a filter and increase/decrease density

#### 9. Color Channels
- When a channel is selected, you can shift colors toward the specified channel
- The effect is strong and not recommended for beginners

#### 10. Color Lookup
- Load different looks for your image

#### 11. Invert
- Inverts the colors in your image

#### 12. Posterize
- Adjusts the level of detail in your image
- More levels = more details and vice versa

#### 13. Threshold
- Similar to Posterize but with black and white only

#### 14. Gradient Maps
- Used to colorize the image in color tones

#### 15. Selective Color
- Choose a specific color and adjust its cyan, magenta, yellow, and black components

---

## Day 5: How to Create Selections in Photoshop

### Selection Tools Overview
If you use the Marquee Tool and make a selection, you can deselect it by going to Select → Deselect, or by pressing `Ctrl` + `D`.

#### Working with Selections
1. Fill a selection with color:
   - Go to Edit → Fill
   - Choose a color to fill the selection
2. Modify selections while creating them:
   - Hold `Space` to move the selection
   - Hold `Shift` to maintain aspect ratio
3. Delete content in a selection:
   - Make a selection and press `Backspace` to delete everything under it
4. Work across layers:
   - The same selection can be active on different layers
   - Selections and layers are completely separate
5. Add to or subtract from selections:
   - Hold `Shift` while making another selection to add to the first one
   - Hold `Alt` while making another selection to subtract from the selection
6. Create new layers with selections:
   - Press `Shift` + `Alt` + `Ctrl` + `N` to make a new layer
   - Press `Shift` + `Backspace` to fill with color

### Selection Tool Types

#### Lasso Tools
- **Lasso Tool**: Draw freehand around objects (can be difficult to use precisely)
- **Polygonal Lasso Tool**: Create straight-line selections
  - Hold `Alt` to temporarily switch back to the regular Lasso Tool
- **Magnetic Lasso Tool**: Automatically detects edges (best for selecting people)
  - Press `Backspace` to undo specific areas

#### Magic Wand Tool
- Selects areas of similar color
- Adjust Tolerance to control how much is selected
- Press `Shift` + click to add areas to the selection
- After making a selection, click Layer Mask to keep only the selection
- Press `Ctrl` + `I` to invert the selection

#### Quick Selection Tool
- Paint in an area and it will automatically select what it thinks belongs to the same object
- Hold `Alt` + click to subtract areas from the selection
- Press `Alt` + `Backspace` to fill a layer mask with a color

### Select Menu Options

#### Color Range
- From the Select tab, choose Select → Color Range to select based on color
- After choosing the color range, use a layer mask to create a selection

#### Select and Mask
- Useful when an object's edge isn't completely selected
- Within Select and Mask, you can paint on areas you don't want to appear

#### Subject Tool
- Uses AI to automatically select the main subject in your image

### Editing with Selections

#### Targeted Adjustments
- Use selections to edit specific areas of a photo
- Example: Use the Elliptical Marquee Tool to select an eye, then use an adjustment layer to change its color
- Do the same for lips or other features

#### Selection Tips
- Press `Ctrl` + right-click on a layer to turn it into a selection
- Save selections via Select → Save Selection
- Hide selection lines by pressing `Ctrl` + `H`

---

## Day 6: Curves in Photoshop

### Levels Adjustment

#### Input and Output Levels
- **Input Levels** (top): Three sliders
- **Output Levels** (bottom): Two sliders

#### Histogram
- Shows light and color information of the photograph
- Left side represents dark areas
- Right side represents light areas

#### Adjusting Input Levels
- Moving the left slider (dark) to the right makes the photo darker
- Moving the right slider (light) to the left makes the photo brighter
- The middle slider can be moved left or right to adjust midtones

#### Adjusting Output Levels
- Takes the darkest point in the image and makes it brighter
- Takes the brightest point and makes it darker

#### Eyedroppers
Three eyedroppers are available:
- **Black**: Sets the black point
- **Grey**: Sets the midtone point
- **White**: Sets the white point

When you select an eyedropper and click on a part of the image, you define that point as the reference for that tone.

#### Color Channels
Change the channel (RGB) to adjust specific colors to be less or more intense.

### Curves Adjustment

#### How Curves Work
- Similar to Levels but with a single graph that combines input and output
- The midpoint slider allows adding multiple points to the curve
- You can make bright areas brighter and dark areas darker (or vice versa)
- Best to stick to 1 or 2 points for subtle adjustments

#### Advanced Curves Techniques
- Eyedroppers work the same way as in Levels
- Use the pen in Curves to draw your own curve for effects that can't be achieved with the regular points
- While using the curve, you can click on an area of the photo to see where it falls on the graph
- Adjustments affect tonal ranges rather than specific areas of the photo

#### Color Channels in Curves
- Work the same as in Levels
- Can be used to add color effects by adjusting red, blue, and green channels
- Example: Create a sunset effect by combining red and blue to make yellow, then use a gradient mask

---

## Day 7: Hue & Saturation

### Hue/Saturation Adjustment Layer

#### Basic Controls
- **Hue**: Changes the color
- **Saturation**: Changes the intensity of the color
- **Lightness**: Changes the brightness of the color

#### Colorize Feature
Lets you change the photo's colors to a specific one that you choose.

#### Targeting Specific Colors
- Instead of adjusting all colors (Master), you can target a specific color
- Choose a color from the dropdown menu
- Use the eyedropper to select exactly where you want to edit

> 📝 **Note:** Even when a specific color is chosen, it may still affect other parts of the image. Use layer masks to control this by brushing with black or white.

#### Color Spectrum Changes
When you choose a color, you can change it to any other color in the spectrum.

### Color Balance
- Lets you add color to shadows, midtones, and highlights
- Mainly used to change color tones

---

## Additional Photoshop Techniques

### Color Channels
These channels can be used to add a flavor of color by changing between red, blue, and green.

#### Creating Color Effects
For example, if a photo has a sunset where the color isn't intense enough:
1. Combine red and blue channels to create a yellow color
2. Use a layer mask with `Ctrl` + `I` and a gradient from color to transparent
3. The result will look more like a natural sunset

### Advanced Selection Techniques

#### Working with Multiple Selections
- When you need to select multiple areas, use `Shift` + click to add to your selection
- For complex selections, combine different selection tools:
  - Start with Quick Selection for the main areas
  - Refine with Lasso Tool for details
  - Use Select and Mask for edge refinement

#### Saving and Loading Selections
1. Create your selection using any selection tools
2. Go to Select → Save Selection
3. Give your selection a name
4. To load it later, go to Select → Load Selection

> 💡 **Tip:** Saved selections are especially useful for complex objects that you need to select repeatedly.

### Advanced Layer Techniques

#### Layer Groups
- Organize related layers by selecting them and pressing `Ctrl` + `G`
- Expand or collapse groups by clicking the arrow next to the group name
- Apply effects or masks to entire groups at once

#### Smart Objects
1. Convert a layer to a Smart Object by right-clicking and selecting "Convert to Smart Object"
2. Smart Objects preserve the original data and allow non-destructive editing
3. Double-click the Smart Object thumbnail to edit its contents

> 📝 **Note:** When you apply filters to Smart Objects, they become Smart Filters that can be adjusted or removed later.

### Working with Filters

#### Smart Filters
- Apply filters non-destructively by converting layers to Smart Objects first
- Adjust filter settings at any time by double-clicking the filter name
- Toggle filter visibility using the eye icon
- Adjust filter opacity and blending mode using the blending options

#### Filter Gallery
1. Go to Filter → Filter Gallery
2. Experiment with different filter combinations
3. Adjust settings for each filter
4. Filters are applied in the order they appear in the list (top to bottom)

### Advanced Brush Techniques

#### Brush Settings
1. Right-click while using the Brush Tool to access quick settings
2. For more options, open the Brush panel from Window → Brush
3. Adjust brush hardness, spacing, and dynamics

#### Creating Custom Brushes
1. Create a shape or pattern you want to use as a brush
2. Select it with the Marquee Tool
3. Go to Edit → Define Brush Preset
4. Name your brush and click OK
5. Your new brush will appear at the end of the brush presets

### Working with Text

#### Text Styles
1. Create text using the Type Tool (`T`)
2. Format it using the Character and Paragraph panels
3. To save a text style, select the text layer and click the "Create new style" button in the Styles panel

#### Text on a Path
1. Create a path using the Pen Tool or Shape Tool
2. Select the Type Tool and click on the path
3. Type your text, which will follow the path
4. Adjust text position by dragging the start/end markers

### Advanced Color Correction

#### Camera Raw Filter
1. Go to Filter → Camera Raw Filter
2. Use the Basic tab to adjust exposure, contrast, highlights, and shadows
3. Use the HSL tab for precise color adjustments
4. Use the Detail tab for sharpening and noise reduction

#### Match Color
1. Go to Image → Adjustments → Match Color
2. Use this to match the color scheme between different images
3. Adjust luminance and color intensity to fine-tune the results

### Creating Actions

#### Recording Actions
1. Open the Actions panel from Window → Actions
2. Click the "Create new action" button
3. Name your action and click Record
4. Perform the steps you want to record
5. Click the Stop button when finished

#### Batch Processing
1. Go to File → Automate → Batch
2. Select your action and source folder
3. Choose destination options
4. Click OK to process all images with your action

### Photoshop Keyboard Shortcuts Reference

#### File Operations
| Action | Shortcut |
|--------|----------|
| New Document | `Ctrl` + `N` |
| Open | `Ctrl` + `O` |
| Save | `Ctrl` + `S` |
| Save As | `Ctrl` + `Shift` + `S` |
| Print | `Ctrl` + `P` |
| Exit | `Ctrl` + `Q` |

#### View Controls
| Action | Shortcut |
|--------|----------|
| Zoom In | `Ctrl` + `+` |
| Zoom Out | `Ctrl` + `-` |
| Fit on Screen | `Ctrl` + `0` |
| 100% View | `Ctrl` + `1` |
| Hide/Show Extras | `Ctrl` + `H` |
| Full Screen Mode | `F` (toggle through modes) |

#### Layer Operations
| Action | Shortcut |
|--------|----------|
| New Layer | `Ctrl` + `Shift` + `N` |
| Duplicate Layer | `Ctrl` + `J` |
| Merge Layers | `Ctrl` + `E` |
| Select All Layers | `Ctrl` + `Alt` + `A` |
| Group Layers | `Ctrl` + `G` |

#### Selection Operations
| Action | Shortcut |
|--------|----------|
| Select All | `Ctrl` + `A` |
| Deselect | `Ctrl` + `D` |
| Reselect | `Ctrl` + `Shift` + `D` |
| Inverse Selection | `Ctrl` + `Shift` + `I` |
| Feather Selection | `Shift` + `F6` |

#### Editing Operations
| Action | Shortcut |
|--------|----------|
| Cut | `Ctrl` + `X` |
| Copy | `Ctrl` + `C` |
| Paste | `Ctrl` + `V` |
| Free Transform | `Ctrl` + `T` |
| Undo | `Ctrl` + `Z` |
| Step Backward | `Ctrl` + `Alt` + `Z` |
| Step Forward | `Ctrl` + `Shift` + `Z` |

### Best Practices for Photoshop Workflow

#### Organizing Your Files
- Use a consistent naming convention for all files
- Create separate folders for different projects
- Keep original files and edited versions separate

#### Non-Destructive Editing
- Always work with layers instead of directly on the background
- Use adjustment layers instead of direct adjustments
- Use Smart Objects when applying filters or transformations
- Save versions at different stages of your work

#### Optimizing Performance
- Regularly purge the clipboard and histories (Edit → Purge)
- Close unused documents to free up memory
- Adjust Performance preferences based on your computer's capabilities
- Use the History panel to manage states and free up memory

#### Color Management
- Set up color profiles appropriate for your output medium
- Use soft proofing to preview how colors will appear when printed
- Calibrate your monitor regularly for accurate color representation

> ⚠️ **Warning:** Always save your work frequently and create backups of important files.

---
