---
layout : default
---
<br>
### ReadMe

There are two main directory where the repo keeps it's images files : `assets/images` and `/uploads`.
We use all image in `assets/images`, but only include image 1MB and over to make the comparison page shorter.

Here, we use gulp-imagemin to compress the images files, in various quality :

1. Loseless.  In lossless compression, no data is lost. Lossy compression reduces file size, but at the expense of possibly reducing image quality.

2. Lossy 80%, 50%, and 10% to exagerate the compression level, so that we can clearly see the difference.
For most people, lossy plugins are the best choice. They offer significantly greater filesize savings, and you can customize the compression levels to meet your needs.

for images in `uploads` directory, will be compressed to  `dist/uploads-loseless`,`dist/uploads-80`,`dist/uploads-50`, and `dist/uploads-10` respectively.
The same goes to `images` directory, the content will be compressed to  `dist/images-loseless`,`dist/images-80`,`dist/images-50`, and `dist/images-10`.

The details setting can be found in `gulpfile.js`


### Skoolbag Repository Simplified Folder Structure

```
Skoolbag-repository
├─ assets
│  └─ images
├─ uploads
└─ dist (Added for this project) * Additional directory added for this compression project. All Compressed images goes inside this directory.
   ├─ uploads-loseless        * Compresed image without losing data.
   ├─ uploads-80              * Image compression quality set to 80%.
   ├─ uploads-50              * Image compression quality set to 50%.
   └─ uploads-10              * Image compression quality set to 10%.
   ├─ images-loseless         * Compresed image without losing data.
   ├─ images-80               * Image compression quality set to 80%.
   ├─ images-50               * Image compression quality set to 50%.
   └─ images-10               * Image compression quality set to 10%.

```

### How this site is laid out
Please find the link in navigation bar, each link contains reduction log and visual comparison between original images vs compresed images.
To get back to this page, please find the home link in the navbar.

Move the slider icon left or right to see the difference in image quality. Or click anywhere in image area to move the slider.
Hover the curson on top of the image to see the overlay. Original image are on the left, compressed image is on the right side.
The slider also work on mobile.<br>

Note : image below is just a screenshot, therefore the slider can not be moved.
{:.alert}

![Image Comparison Slider]({{ "screenshot/slider.jpg" | relative_url }}){:.width-40}
![Image Overlay]({{ "screenshot/overlay.jpg" | relative_url }}){:.width-50}

### Summary

