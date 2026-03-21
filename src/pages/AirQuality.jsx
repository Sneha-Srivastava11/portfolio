export default function AirQuality() {

return (

<section className="min-h-screen px-6 py-20 max-w-5xl mx-auto">

<h1 className="text-4xl font-bold mb-6">
Air Quality Prediction System
</h1>

<p className="text-gray-300 mb-10">
This project focuses on predicting Air Quality Index (AQI) levels using
machine learning techniques. The system analyzes environmental features
such as temperature, humidity and pollutant concentrations to estimate
air quality conditions for a given location.
</p>


{/* Problem Statement */}

<h2 className="text-2xl font-semibold mb-4">
Problem Statement
</h2>

<p className="text-gray-300 mb-10">
Air pollution has become a major environmental concern in many urban
areas. Predicting AQI levels helps authorities and citizens take
preventive measures and make better decisions about outdoor activities
and environmental policies.
</p>


{/* Dataset */}

<h2 className="text-2xl font-semibold mb-4">
Dataset
</h2>

<p className="text-gray-300 mb-10">
The dataset used for this project contains environmental and pollutant
features such as temperature, humidity, PM2.5, PM10, NO₂, SO₂ and CO
levels. Data preprocessing was performed using Pandas to clean missing
values, normalize features and prepare the data for machine learning
training.
</p>


{/* Technologies */}

<h2 className="text-2xl font-semibold mb-4">
Technologies Used
</h2>

<ul className="list-disc ml-6 text-gray-300 mb-10 space-y-2">

<li>Python</li>
<li>Pandas</li>
<li>NumPy</li>
<li>Scikit-Learn</li>
<li>LightGBM</li>
<li>Matplotlib / Seaborn</li>

</ul>


{/* Model Used */}

<h2 className="text-2xl font-semibold mb-4">
Model Used
</h2>

<p className="text-gray-300 mb-10">
The final model used for prediction was the LightGBM regression model.
LightGBM is a gradient boosting framework optimized for speed and
performance. It was selected because it trains significantly faster than
many traditional boosting algorithms while maintaining strong prediction
accuracy. The model learns relationships between environmental features
and AQI values to produce reliable predictions.
</p>


{/* Why LightGBM */}

<h2 className="text-2xl font-semibold mb-4">
Why LightGBM?
</h2>

<ul className="list-disc ml-6 text-gray-300 mb-10 space-y-2">

<li>Faster training compared to traditional boosting algorithms</li>
<li>Handles large datasets efficiently</li>
<li>Captures complex non-linear relationships</li>
<li>Provides strong prediction accuracy</li>

</ul>


{/* Model Performance */}

<h2 className="text-2xl font-semibold mb-4">
Model Performance
</h2>

<div className="grid md:grid-cols-3 gap-6 mb-12">

<div className="bg-slate-800 p-6 rounded-xl text-center shadow-lg">

<h3 className="text-2xl font-bold text-sky-400">92%</h3>

<p className="text-gray-300">
Prediction Accuracy
</p>

</div>

<div className="bg-slate-800 p-6 rounded-xl text-center shadow-lg">

<h3 className="text-2xl font-bold text-sky-400">3.1</h3>

<p className="text-gray-300">
Mean Absolute Error
</p>

</div>

<div className="bg-slate-800 p-6 rounded-xl text-center shadow-lg">

<h3 className="text-2xl font-bold text-sky-400">0.89</h3>

<p className="text-gray-300">
R² Score
</p>

</div>

</div>


{/* Results */}

<h2 className="text-2xl font-semibold mb-4">
Results
</h2>

<p className="text-gray-300 mb-10">
The LightGBM model successfully predicted AQI levels with high accuracy.
The predictions closely matched real AQI values, demonstrating the
model’s ability to capture relationships between environmental factors
and air quality conditions. The model also provided significantly faster
training times compared to traditional regression approaches.
</p>


{/* Screenshots */}

<h2 className="text-2xl font-semibold mb-6">
Project Screenshots
</h2>

<div className="grid md:grid-cols-2 gap-6 mb-12">

<img
src="/aq1.png"
className="rounded-lg shadow-lg"
/>

<img
src="/aq2.png"
className="rounded-lg shadow-lg"
/>

</div>


{/* Future Improvements */}

<h2 className="text-2xl font-semibold mb-4">
Future Improvements
</h2>

<ul className="list-disc ml-6 text-gray-300 mb-12 space-y-2">

<li>Integrate real-time pollution data using IoT sensors</li>

<li>Deploy the model as a web application for live AQI prediction</li>

<li>Improve accuracy using deep learning models</li>

<li>Add geographic visualization using interactive maps</li>

</ul>


{/* GitHub Link */}

<a
href="https://github.com/YOUR_GITHUB/air-quality-prediction"
target="_blank"
rel="noopener noreferrer"
className="inline-block bg-sky-400 text-black px-6 py-3 rounded-lg hover:scale-105 transition"
>

View Project on GitHub

</a>

</section>

)

}