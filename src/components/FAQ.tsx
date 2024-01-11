import { motion } from 'framer-motion';
import { useState } from 'react';

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '../components/accordion';

export default function FAQ() {
	return (
		<Accordion type="single" collapsible className="w-full">
			<AccordionItem value="item-1">
				<AccordionTrigger>Terapia online funciona?</AccordionTrigger>
				<AccordionContent>
					As pesquisas mais recentes mostram que 85% das pessoas preferem a
					terapia online ou a acham tão boa quanto a presencial. Segundo o
					Conselho Federal de Psicologia, o acompanhamento online possui a mesma
					eficácia do acompanhamento presencial, além de ser mais em conta e não
					exigir deslocamentos.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-2">
				<AccordionTrigger>Como eu sei se devo fazer terapia?</AccordionTrigger>
				<AccordionContent>
					A terapia pode servir para diversas funções: se conhecer melhor,
					cuidar da saúde emocional ou ajudar a lidar com situações de
					sofrimento psíquico. Algumas pessoas também optam por fazer terapia
					para melhorar o rendimento profissional, reduzir o estresse ou a
					ansiedade no dia-a-dia. Do ponto de vista clínico, a terapia passa a
					ser sugerida quando as suas atividades rotineiras estão sendo
					comprometidas por emoções negativas recorrentes e/ou sintomas físicos
					começam a aparecer.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-3">
				<AccordionTrigger className="text-left">
					Não tenho um celular novo ou internet boa para realizar as consultas.
					Isso é um problema?
				</AccordionTrigger>
				<AccordionContent>
					O aplicativo adapta a qualidade da chamada à qualidade do dispositivo
					e da conexão disponível. Você também pode optar por seguir a consulta
					através de chamadas de áudio, caso o vídeo não esteja sendo
					conveniente.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-4">
				<AccordionTrigger>Posso remarcar as minhas consultas?</AccordionTrigger>
				<AccordionContent>
					Qualquer consulta poderá ser remarcada através do WhatsApp até uma
					vez, desde que a remarcação seja realizada até 24h antes do atual
					horário da consulta. Você poderá escolher um novo horário de acordo
					com a agenda disponível.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-5">
				<AccordionTrigger>Terapia online funciona?</AccordionTrigger>
				<AccordionContent>
					As pesquisas mais recentes mostram que 85% das pessoas preferem a
					terapia online ou a acham tão boa quanto a presencial. Segundo o
					Conselho Federal de Psicologia, o acompanhamento online possui a mesma
					eficácia do acompanhamento presencial, além de ser mais em conta e não
					exigir deslocamentos.
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
}
