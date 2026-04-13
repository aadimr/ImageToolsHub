import { 
  Minimize2, 
  Crop, 
  FileBox, 
  ImageIcon, 
  RefreshCw, 
  FileDigit,
  Maximize,
  ArrowRightLeft,
  Layers,
  FileText,
  Stamp
} from "lucide-react";

export interface Tool {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  metaTitle: string;
  metaDescription: string;
  category: 'Compression' | 'Conversion' | 'Editing' | 'AI';
}

export const TOOLS: Tool[] = [
  {
    id: "image-compressor",
    title: "Image Compressor",
    description: "Compress JPG, PNG, and WebP images instantly without losing quality.",
    icon: <Minimize2 size={24} />,
    href: "/tools/image-compressor",
    metaTitle: "Free Online Image Compressor \u2013 Reduce JPG, PNG & WebP Size Instantly",
    metaDescription: "Compress JPG, PNG, and WebP images online without losing quality. Our free image compressor works directly in your browser with no uploads and complete privacy.",
    category: 'Compression'
  },
  {
    id: "image-resizer",
    title: "Image Resizer",
    description: "Resize dimensions of your images quickly by pixels or percentage.",
    icon: <Maximize size={24} />,
    href: "/tools/image-resizer",
    metaTitle: "Free Image Resizer \u2013 Resize Photos & Images Online Fast",
    metaDescription: "Easily resize images to exact dimensions without losing quality. Safe, private, and process directly within your browser. Free online image resizer.",
    category: 'Compression'
  },
  {
    id: "image-to-pdf",
    title: "Image to PDF",
    description: "Convert multiple images into a single PDF document securely.",
    icon: <FileBox size={24} />,
    href: "/tools/image-to-pdf",
    metaTitle: "Convert Image to PDF \u2013 Free JPG, PNG to PDF Online",
    metaDescription: "Export unlimited JPG and PNG pictures to high-quality PDF files for free in seconds. Fully secure and private client-side converter.",
    category: 'Conversion'
  },
  {
    id: "jpg-to-png",
    title: "JPG to PNG",
    description: "Convert JPEG/JPG images to transparent PNG format.",
    icon: <ArrowRightLeft size={24} />,
    href: "/tools/jpg-to-png",
    metaTitle: "JPG to PNG Converter \u2013 Turn JPEGs into Lossless PNGs",
    metaDescription: "Free online tool to instantly convert JPG files into high-quality PNG formats. Works straight inside your browser for maximum data privacy.",
    category: 'Conversion'
  },
  {
    id: "png-to-jpg",
    title: "PNG to JPG",
    description: "Convert PNG images to smaller JPG format for the web.",
    icon: <RefreshCw size={24} />,
    href: "/tools/png-to-jpg",
    metaTitle: "PNG to JPG Converter \u2013 Reduce PNG File Size Instantly",
    metaDescription: "Easily compress graphical PNG files into standard JPGs to drastically drop file sizes. Fast, reliable, and entirely browser-based.",
    category: 'Conversion'
  },
  {
    id: "webp-converter",
    title: "WebP Converter",
    description: "Convert images to and from the modern WebP format.",
    icon: <FileDigit size={24} />,
    href: "/tools/webp-converter",
    metaTitle: "Convert to WebP Online \u2013 Fast Image to WebP Generator",
    metaDescription: "Compress files globally mapping them natively into Google's optimized WebP format online seamlessly. Completely free local converter.",
    category: 'Conversion'
  },
  {
    id: "jpg-to-webp",
    title: "JPG to WebP",
    description: "Convert JPG images to optimized WebP format for fast web performance.",
    icon: <ArrowRightLeft size={24} />,
    href: "/tools/jpg-to-webp",
    metaTitle: "JPG to WebP Converter \u2013 Free Online Image to WebP",
    metaDescription: "Convert JPG images to WebP format instantly in your browser. Improve your website's speed with modern image compression.",
    category: 'Conversion'
  },
  {
    id: "png-to-webp",
    title: "PNG to WebP",
    description: "Convert PNG images to WebP while maintaining transparency.",
    icon: <ArrowRightLeft size={24} />,
    href: "/tools/png-to-webp",
    metaTitle: "PNG to WebP Converter \u2013 Free Online PNG to WebP",
    metaDescription: "Convert PNG to WebP format with transparency. Free, fast, and secure browser-based conversion tool.",
    category: 'Conversion'
  },
  {
    id: "webp-to-jpg",
    title: "WebP to JPG",
    description: "Convert WebP images to universal JPG format for compatibility.",
    icon: <ArrowRightLeft size={24} />,
    href: "/tools/webp-to-jpg",
    metaTitle: "WebP to JPG Converter \u2013 Free Online WebP to JPG",
    metaDescription: "Convert WebP images to JPG format for better compatibility. Fast, free, and secure online image converter.",
    category: 'Conversion'
  },
  {
    id: "image-cropper",
    title: "Image Cropper",
    description: "Crop and trim your images to exact dimensions.",
    icon: <Crop size={24} />,
    href: "/tools/image-cropper",
    metaTitle: "Free Online Image Cropper \u2013 Crop Photos & Aspects Instantly",
    metaDescription: "Easily select and drop unwanted graphic areas targeting custom picture fragments rapidly. 100% private native tool architecture.",
    category: 'Editing'
  },
  {
    id: "format-converter",
    title: "Format Converter",
    description: "Generic tool to convert any image between JPG, PNG, and WebP.",
    icon: <ImageIcon size={24} />,
    href: "/tools/format-converter",
    metaTitle: "Format Converter \u2013 Universal JPG, PNG & WebP Switcher",
    metaDescription: "Interchange universally between WebP, PNG, and JPG formats. Encapsulate file parameters entirely securely inside local device instances natively.",
    category: 'Conversion'
  },
  {
    id: "remove-background",
    title: "Remove Background",
    description: "Automatically remove backgrounds from your images using AI locally.",
    icon: <Layers size={24} />,
    href: "/tools/remove-background",
    metaTitle: "Free Background Remover Online \u2013 Remove Image Background Instantly",
    metaDescription: "Remove image backgrounds instantly with our free AI-powered background remover. Works directly in your browser with no uploads and complete privacy.",
    category: 'AI'
  },
  {
    id: "image-to-text",
    title: "Image to Text",
    description: "Extract text from images accurately using OCR technology.",
    icon: <FileText size={24} />,
    href: "/tools/image-to-text",
    metaTitle: "Image to Text Converter Online \u2013 Extract Text from Images (OCR)",
    metaDescription: "Extract text from images instantly using our free online OCR tool. Convert JPG, PNG, and WebP images to editable text directly in your browser.",
    category: 'AI'
  },
  {
    id: "add-watermark",
    title: "Add Watermark",
    description: "Add custom text watermarks to your images to protect your work.",
    icon: <Stamp size={24} />,
    href: "/tools/add-watermark",
    metaTitle: "Add Watermark to Image Online \u2013 Free Watermark Tool",
    metaDescription: "Add custom text watermarks to your images instantly. Protect your photos with our free online watermark tool that works directly in your browser.",
    category: 'Editing'
  }
];

export const getToolById = (id: string) => TOOLS.find(tool => tool.id === id);
