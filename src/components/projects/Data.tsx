import Image from 'next/image';
import { Image as Img } from 'lucide-react';
import { ChevronRight, Link } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { url } from 'inspector';

// Enhanced project content array with all projects
const PROJECT_CONTENT = [
  {
    title: 'Doctor Assistant',
    description: `An AI-powered healthcare assistant designed for real-time, intelligent interaction via natural language and multimodal inputs.<br>
- Built a <strong>LangChain Agent</strong> to manage multi-turn conversations, memory, and tool invocation for dynamic user queries  
- Integrated <strong>Pinecone</strong> for fast, semantic retrieval across medical PDFs, documents, and patient records  
- Enabled <strong>multimodal analysis</strong> of uploaded content: images (e.g., skin conditions), PDFs, and plain text  
- Used <strong>Retrieval-Augmented Generation (RAG)</strong> to ground LLM responses in document context  
- Provides contextual medical insights, document summarization, and symptom interpretation using <strong>OpenAI</strong>, <strong>GCP</strong>, and <strong>Azure</strong> APIs`,


    techStack: [
      'Python', 'LLM', 'OpenAI', 'Azure', 'GCP', 'OCR', 'RAG', 'Vector DB',
      'Pinecone', 'Langchain', 'vLLM', 'Ollama', 'PyPDF'
    ],
    date: '2024 - 2025',
    links: [
      { name: 'Website', url: 'https://doctornetwork.us/' },
      { name: 'Android App', url: 'https://play.google.com/store/apps/details?id=com.doctornetwork.doctorassitant&hl=en&pli=1' },
      { name: 'IOS App', url: 'https://apps.apple.com/vn/app/doctor-assistant/id6477260207?l=vi' },
    ],
    images: [
      { src: '/projects/doctor-assistant/diagrams.webp', alt: 'Chatbot diagram' },
      { src: '/projects/doctor-assistant/inapp.png', alt: 'In-app interface' },
      { src: '/projects/doctor-assistant/inapp-history.png', alt: 'Chat history' },
    ],
  },
  {
    title: 'Spaceone',
    description: `A multimodal big data pipeline for video content summarization and social sentiment analysis at scale.<br>
- Built an end-to-end <strong>video summarization pipeline</strong>: extracted clean vocals using <strong>Spleeter</strong>, converted speech to text, and summarized using <strong>OpenAI LLMs</strong> with structured prompts  
- Fine-tuned <strong>PhoBERT</strong> for sentiment classification on Vietnamese social media posts, improving context sensitivity  
- Combined <strong>audio preprocessing</strong>, <strong>ASR</strong>, and <strong>LLM-driven summarization</strong> into a unified pipeline  
- Integrated <strong>Kafka</strong> for scalable stream processing of real-time content  
- Deployed on <strong>GCP</strong> and <strong>AWS</strong> in a hybrid cloud architecture  
- Outputs structured summaries for downstream analytics and search`,

    techStack: ['Python', 'Kafka', 'OpenAI', 'GCP', 'AWS', 'NodeJs', 'Transformer'],
    date: '2024',
    links: [
      { name: 'Homepage', url: 'https://spaceone.vn/' },
    ],
    images: [
      { src: '/projects/spaceone/comments.png', alt: 'Sentiment analysis result' },
      { src: '/projects/spaceone/summary.png', alt: 'Video summary' },
    ],
  },
  {
    title: 'Diabetes Prediction',
    description: `A regression-based ML pipeline for predicting blood sugar levels using questionnaire responses and basic diagnostics, aiming to support early-stage, non-invasive diabetes screening.<br>
- Cleaned tabular data with 198+ mismatches and 294 missing glucose entries; encoded categorical and binary features
- Applied <b><i>y′ = ln(1 + y)</i></b> log transformation on the left-skewed target and reversed with <b><i>y = eʸ′ − 1</i></b>
- Balanced the dataset using ADASYN to correct for bias toward non-diabetic samples
- Trained and tuned multiple regressors (SVR, MLP, RF, GBDT...) using <b>RandomizedSearchCV</b>
- SVR achieved best performance with <b>~0.6–0.7 mmol/L error</b> and highest R² on test sets
- Pipeline built with explainable, healthcare-compatible tabular ML and EDA-guided preprocessing`,
    techStack: ['Python', 'Pandas', 'XGBoost', 'Scikit-learn'],
    date: '2024',
    links: [],
    images: [
      { src: '/projects/diabetes/data-skewness.png', alt: 'Data skewness' },
      { src: '/projects/diabetes/data-after-norm.png', alt: 'Data after normalized using log transformation' },
      { src: '/projects/diabetes/model-comparision.png', alt: 'Model comparison' },
      { src: '/projects/diabetes/result.png', alt: 'Prediction results' },
    ],
  },
  {
    title: 'Stock Price Forecasting',
    description: `This project applied exploratory data analysis (EDA) and a <strong>Long Short-Term Memory (LSTM)</strong> model to forecast stock closing prices using historical trends and volume indicators.<br>
<strong>Data Preprocessing:</strong>  
- Parsed and cleaned NSE (Tata) stock data.  
- Applied <strong>MinMax scaling</strong> on features with a dedicated scaler for Close price.<br>
<strong>EDA Insights:</strong>  
- Visualized price trends and <strong>moving averages</strong>  
- Analyzed <strong>daily returns</strong> and volatility  
- Built a <strong>correlation matrix</strong> and candlestick charts for patterns<br>
<strong>LSTM Forecasting:</strong>  
- Used sliding windows of 50 days as input  
- Built a <strong>2-layer LSTM</strong> model with MSE loss  
- <strong>Inverse transformed</strong> predictions for real price scale<br>`,


    techStack: ['Python', 'Pandas', 'Seaborn', 'LSTM', 'Keras', 'Plotly'],
    date: '2023',
    links: [
      { name: 'Dataset', url: 'https://data-flair.training/blogs/download-tata-global-beverages-stocks-data/' },
      { name: 'GitHub', url: 'https://github.com/Baro1502/stock-price-prediction' },
    ],
    images: [
      { src: '/projects/stock-lstm/price-ma.png', alt: 'Moving averages' },
      { src: '/projects/stock-lstm/volatility.png', alt: 'Volatility graph' },
      { src: '/projects/stock-lstm/eval.png', alt: 'Prediction vs actual' },
    ],
  },
  {
    title: 'Spooface',
    description: `A spoofing-aware Face ID system capable of verifying real human presence and detecting presentation attacks such as <strong>photos, screens, and deepfakes</strong> during facial authentication.<br>
- Finetuned <strong>YOLOv8</strong> on a curated spoofing dataset to distinguish between real and spoofed faces  
- Designed a <strong>multi-step spoof detection pipeline</strong> combining OpenCV preprocessing, live face capture, liveness verification, and classification  
- Integrated <strong>DeepFace</strong> and <strong>face_recognition</strong> libraries to verify identity after passing spoof detection  
- Enables <strong>real-time liveness detection</strong> against common spoofing attacks  
- Lightweight and <strong>deployment-ready codebase</strong> for edge devices or kiosk-based authentication  
- Modular architecture allowing plug-and-play with other <strong>biometric or login systems</strong>`,

    techStack: ['Python', 'YOLOv8', 'OpenCV', 'DeepFace', 'face_recognition', 'Pandas'],
    date: '2024',
    links: [],
    images: [
      { src: '/projects/spooface/both-spoofing.png', alt: 'Real vs Spoof' },
      { src: '/projects/spooface/real-spoofing.png', alt: 'Only real face detected' },
    ],
  },
  {
    title: 'Traffix',
    description: `We developed <strong>Traffix</strong>, a real-time traffic navigation system that replaces GPS-based routing with <strong>AI-powered visual traffic analysis</strong> using public surveillance cameras in Vietnam.<br>
<strong>Live Camera Integration:</strong> Collected real-time snapshots from city-wide traffic camera APIs.
<strong>YOLOv8-based Detection:</strong> Fine-tuned a custom <strong>YOLOv8</strong> model to detect and count vehicles (motorbike, car, bus) in images.<br>
<strong>Smart Routing:</strong> Modeled each camera as a graph node, with an <strong>A* pathfinding algorithm</strong> using a congestion heuristic weighted by vehicle type (e.g., bus > car > motorbike).
<strong>Mobile App Interface:</strong> Built with <strong>React Native</strong> to display optimal routes and live traffic images.<br>
<strong>Backend Infrastructure:</strong> Python-based API integrating object detection, graph routing, and Google Maps API for camera geolocation and route visualization.<br>
<strong>Key Highlights:</strong>
- <strong>Real-time visual traffic analysis</strong> from public camera feeds
- AI-driven congestion estimation using object detection
- Dynamic route suggestions based on live traffic, not outdated GPS data
- Focused deployment within a single district for efficient real-world testing`,


    techStack: ['Python', 'YOLOv8', 'OpenCV', 'React Native', 'Google Maps API'],
    date: '2024 - 2025',
    links: [],
    images: [
      { src: '/projects/traffix/detection-batch1.jpg', alt: 'Vehicle detection' },
      { src: '/projects/traffix/default-inapp.jpg', alt: 'App screenshot' },
      { src: '/projects/traffix/PC-curve.png', alt: 'Precision-Confidence curve' },
      { src: '/projects/traffix/RC-curve.png', alt: 'Recall-Confidence curve' },
      { src: '/projects/traffix/PR-curve.jpeg', alt: 'Precision-Recall curve' },
      { src: '/projects/traffix/confusion-matrix.png', alt: 'Confusion matrix' },
    ],
  },
];


// Define interface for project prop
interface ProjectProps {
  title: string;
  description?: string;
  techStack?: string[];
  date?: string;
  links?: { name: string; url: string }[];
  images?: { src: string; alt: string }[];
}

const ProjectContent = ({ project }: { project: ProjectProps }) => {
  // Find the matching project data
  const projectData = PROJECT_CONTENT.find((p) => p.title === project.title);

  if (!projectData) {
    return <div>Project details not available</div>;
  }

  return (
    <div className="space-y-10">
      {/* Header section with description */}
      <div className="rounded-3xl bg-[#F5F5F7] p-8 dark:bg-[#1D1D1F]">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
            <span>{projectData.date}</span>
          </div>

          <p className="text-secondary-foreground font-sans text-base leading-relaxed md:text-lg text-justify whitespace-pre-line"
            dangerouslySetInnerHTML={{ __html: projectData.description || '' } as { __html: string }}
          />



          {/* Tech stack */}
          <div className="pt-4">
            <h3 className="mb-3 text-sm tracking-wide text-neutral-500 uppercase dark:text-neutral-400">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {projectData.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="rounded-full bg-neutral-200 px-3 py-1 text-sm text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Links section */}
      {projectData.links && projectData.links.length > 0 && (
        <div className="mb-24">
          <div className="px-6 mb-4 flex items-center gap-2">
            <h3 className="text-sm tracking-wide text-neutral-500 dark:text-neutral-400">
              Links
            </h3>
            <Link className="text-muted-foreground w-4" />
          </div>
          <Separator className="my-4" />
          <div className="space-y-3">
            {projectData.links.map((link, index) => (
                <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#F5F5F7] flex items-center justify-between rounded-xl p-4 transition-colors hover:bg-[#E5E5E7] dark:bg-neutral-800 dark:hover:bg-neutral-700"
                >
                <span className="font-light capitalize">{link.name}</span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
            ))}
          </div>
        </div>
      )}
{/* Images gallery */}
{projectData.images && projectData.images.length > 0 && (
  <div className="space-y-6">
    <div className="grid grid-cols-1 gap-6">
      {projectData.images.map((image, index) => (
        <div
          key={index}
          className="w-full rounded-xl bg-neutral-100 dark:bg-neutral-900 p-4 space-y-2"
        >
          <div className="relative w-full h-96 overflow-hidden rounded-lg bg-white dark:bg-black flex items-center justify-center">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-contain"
            />
          </div>
          <p className="text-sm text-neutral-600 dark:text-neutral-300 text-center">
            {image.alt}
          </p>
        </div>
      ))}
    </div>
  </div>
)}




    </div>
  );
};

// Main data export with updated content
export const data = [
  {
    category: 'Healthcare AI',
    title: 'Doctor Assistant',
    src: '/projects/doctor-assistant/logo.webp',
    content: <ProjectContent project={{ title: 'Doctor Assistant' }} />,
  },
  {
    category: 'Big Data & Multimodal',
    title: 'Spaceone',
    src: '/projects/spaceone/logo.webp',
    content: <ProjectContent project={{ title: 'Spaceone' }} />,
  },
  {
    category: 'Computer Vision',
    title: 'Spooface',
    src: '/projects/spooface/logo.webp',
    content: <ProjectContent project={{ title: 'Spooface' }} />,
  },
  {
    category: 'Finance & Deep Learning',
    title: 'Stock Price Forecasting',
    src: '/projects/stock-lstm/logo.png',
    content: <ProjectContent project={{ title: 'Stock Price Forecasting' }} />,
  },
  {
    category: 'Healthcare & Classification',
    title: 'Diabetes Prediction',
    src: '/projects/diabetes/logo.png',
    content: <ProjectContent project={{ title: 'Diabetes Prediction' }} />,
  },
  {
    category: 'Computer Vision API',
    title: 'Traffix',
    src: '/projects/traffix/logo.png',
    content: <ProjectContent project={{ title: 'Traffix' }} />,
  },
];
