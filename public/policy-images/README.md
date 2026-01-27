# Policy Images

This folder contains JPG/PNG images of church policy documents for maximum security viewing.

## Current Structure

```
policy-images/
├── Data protection/          (✅ UPLOADED - 12 pages)
│   ├── page-1.jpg
│   ├── page-2.jpg
│   ├── ...
│   └── page-12.jpg
├── risk-management/          (⏳ PENDING UPLOAD)
│   └── (upload your images here)
└── safeguarding/             (⏳ PENDING UPLOAD)
    └── (upload your images here)
```

## Status

- ✅ **Data Protection Policy**: 12 pages uploaded and working
- ⏳ **Risk Management Policy**: Waiting for upload
- ⏳ **Safeguarding Policy**: Waiting for upload

## Instructions for Remaining Policies

1. Extract your ZIP files for risk-management and safeguarding policies
2. Rename the images to follow the pattern: `page-1.jpg`, `page-2.jpg`, etc.
3. Place them in the corresponding policy folder
4. Update the code in `/src/app/policies/page.tsx` to include the correct number of pages

## Security Features

- Images cannot be downloaded like PDFs
- Right-click protection
- Text selection disabled
- Watermark overlay
- Copy/paste protection
- Developer tools detection
- No browser download options
- Navigation with Previous/Next buttons
- Page counter display

## Benefits over PDF

- No browser PDF viewer controls
- No download/print buttons
- Better protection against copying
- Watermark overlay on images
- Complete control over viewing experience