import { motion } from 'framer-motion';
import { useState } from 'react';

interface FAQProps {
	title: string;
	answer: string;
}

const questions: FAQProps[] = [
	{
		title: 'Terapia online funciona?',
		answer:
			'As pesquisas mais recentes mostram que 85% das pessoas preferem a terapia online ou a acham tão boa quanto a presencial. Segundo o Conselho Federal de Psicologia, o acompanhamento online possui a mesma eficácia do acompanhamento presencial, além de ser mais em conta e não exigir deslocamentos.	',
	},
	{
		title: 'Como eu sei se devo fazer terapia?',
		answer:
			'A terapia pode servir para diversas funções: se conhecer melhor, cuidar da saúde emocional ou ajudar a lidar com situações de sofrimento psíquico. Algumas pessoas também optam por fazer terapia para melhorar o rendimento profissional, reduzir o estresse ou a ansiedade no dia-a-dia. Do ponto de vista clínico, a terapia passa a ser sugerida quando as suas atividades rotineiras estão sendo comprometidas por emoções negativas recorrentes e/ou sintomas físicos começam a aparecer.',
	},
	{
		title:
			'Não tenho um celular novo ou internet boa para realizar as consultas. Isso é um problema?',
		answer:
			'O aplicativo adapta a qualidade da chamada à qualidade do dispositivo e da conexão disponível. Você também pode optar por seguir a consulta através de chamadas de áudio, caso o vídeo não esteja sendo conveniente.',
	},
	{
		title: 'Posso remarcar as minhas consultas?',
		answer:
			'Qualquer consulta poderá ser remarcada através do WhatsApp até uma vez, desde que a remarcação seja realizada até 24h antes do atual horário da consulta. Você poderá escolher um novo horário de acordo com a agenda disponível.',
	},
	{
		title: 'Terapia online funciona?',
		answer:
			'As pesquisas mais recentes mostram que 85% das pessoas preferem a terapia online ou a acham tão boa quanto a presencial. Segundo o Conselho Federal de Psicologia, o acompanhamento online possui a mesma eficácia do acompanhamento presencial, além de ser mais em conta e não exigir deslocamentos.',
	},
];

export default function FAQ() {
	const [toggled, setToggled] = useState<number | null>(null);

	const handleToggle = (index: number) => {
		setToggled((prevIndex) => (prevIndex === index ? null : index));
	};

	return (
		<div className="relative">
			<img
				src="/logo.png"
				alt="shape"
				width={600}
				height={600}
				className="absolute -top-20 left-20 opacity-10"
			/>

			{questions.map((question, index) => (
				<div
					key={index}
					className="border-b-2 border-secondaryDark cursor-pointer py-6"
				>
					<div
						className=" flex justify-between item-center"
						onClick={() => handleToggle(index)}
					>
						<h3
							className={`font-semibold text-xs sm:text-sm ${
								toggled === index ? 'text-secondaryDark' : 'text-slate-900'
							}`}
						>
							{question.title}
						</h3>
						<img src="/down_arrow.png" alt="arrow" className="w-4 h-4" />
					</div>
					{toggled === index && (
						<motion.div
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.3 }}
						>
							<p className="pt-2 italic">{question.answer}</p>
						</motion.div>
					)}
				</div>
			))}
		</div>
	);
}
