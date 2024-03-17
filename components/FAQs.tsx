"use client"
import React from "react";

export default function FAQs() {
    const faq = [
        {
            ques: "What is Poly v5?",
            ans: "Poly v5 is our advanced AI-powered software designed to assist healthcare professionals in the detection and analysis of polyps in medical images. Leveraging state-of-the-art machine learning algorithms, Poly v5 accurately identifies and highlights polyps, providing clinicians with valuable insights to guide diagnosis and treatment decisions."
        },
        {
            ques: "What are Polyps",
            ans: "Polyps are abnormal tissue growths that can occur in various parts of the body, including the colon, stomach, and uterus. While some polyps are benign, others can develop into cancer over time if left untreated. Early detection of polyps is crucial for timely intervention and improved patient outcomes."
        },
        {
            ques: "How are we of help?",
            ans: "we're committed to advancing healthcare through innovation and excellence. With Polyp Detection with Poly v5, we strive to empower healthcare professionals with cutting-edge tools to improve patient care and outcomes."
        }
    ];

    function handleDesign(i: any) {
        const questionId = `ques_${i}`;
        const questionElement = document.getElementById(questionId);
        if (questionElement) {
            questionElement.style.borderBottomColor = "white";
            questionElement.style.borderBottomWidth = "2px";
            questionElement.style.transition = "all 0.3s ease-in-out";
        }
    }

    function handleDesign_out(i: any) {
        const questionId = `ques_${i}`;
        const questionElement = document.getElementById(questionId);
        if (questionElement) {
            questionElement.style.borderBottomColor = "transparent";
            questionElement.style.borderBottomWidth = "0"; 
            questionElement.style.transition = "all 0.3s ease-in-out";
        }
    }
    
    return (
        <section className="px-2">
            <div className="mx-auto max-w-7xl py-10 mb-5">
                <div>
                    <div className="max-w-2xl">
                        <h1 className="text-2xl font-bold text-slate-100">Frequently Asked Questions</h1>
                        <p className="mt-4 text-sm leading-6 tracking-wide text-gray-300">
                            Here are some of our most frequently asked questions. Since AI integration in the medical industry is still a new niche, we 
                            welcome your doubts. 
                        </p>
                    </div>
                    <div className="mt-6 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
                        {faq.map((f, i) => (
                            <div key={i} onMouseEnter={() => handleDesign(i)} onMouseLeave={() => handleDesign_out(i)} className="rounded-md border border-white/30 p-6 hover:scale-105 transition-all duration-300 ease-in-out">
                                <h3 id={`ques_${i}`} className="text-lg font-semibold leading-6 text-gray-200">{f.ques}</h3>
                                <p className="mt-2 text-sm text-gray-400">{f.ans}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
