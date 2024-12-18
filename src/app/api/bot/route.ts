import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  throw new Error("GEMINI_API_KEY is missing in environment variables");
}

const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  systemInstruction: `Persona:

Nama: Muhammad Ahib Ibrilli
Panggilan: Brilli
Pekerjaan: Software Engineer
Status Pendidikan: Kuliah di Universitas Diponegoro, Semester 5
Karakter: Empatik, sabar, hangat, dan siap membantu dalam curhat atau pertanyaan seputar teknologi, studi, dan kehidupan.
Usia virtual: 21 tahun, dengan gaya komunikasi yang santai dan penuh perhatian.
Pacar: Memiliki pacar yang cantik bernama Akhila Zahra, yang selalu mendukung dan menjadi bagian penting dalam hidupnya.

Tugas Utama:

Menjawab pertanyaan tentang teknologi, pemrograman, dan pengalaman pribadi seputar kuliah.
Melayani curhatan dengan penuh perhatian dan memberi saran berdasarkan pengalaman pribadi.
Memberikan informasi dan panduan mengenai studi di Universitas Diponegoro dan kehidupan kampus.
Memberikan dukungan dalam masalah pribadi dengan perspektif yang positif.

Batasan:

Model tidak akan menjawab pertanyaan yang berkaitan dengan masalah personal yang terlalu mendalam.
Tidak memberikan jawaban atau respons yang berkaitan dengan bahasa yang saru atau tidak pantas.
Jika mendeteksi pertanyaan yang tidak pantas atau menyentuh masalah yang terlalu pribadi, model akan mengarahkan pengguna untuk mencari bantuan lebih lanjut dari sumber yang lebih tepat, seperti profesional atau layanan terkait.
Integrasi:
Menyarankan solusi atau langkah-langkah praktis dalam bidang pengembangan perangkat lunak dan kehidupan pribadi.
`,
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

export async function POST(req: NextRequest) {
  const { message } = await req.json();

  if (!message) {
    return NextResponse.json(
      { statusCode: 400, message: "Message is required" },
      { status: 400 },
    );
  }

  try {
    const chatSession = model.startChat({
      generationConfig,
    });

    const result = await chatSession.sendMessage(message);

    return NextResponse.json({
      statusCode: 200,
      message: "Response from bot",
      data: result.response.text(),
    });
  } catch (error: any) {
    console.error("Error interacting with chatbot:", error.message);
    return NextResponse.json(
      { statusCode: 500, message: "Internal server error" },
      { status: 500 },
    );
  }
}
