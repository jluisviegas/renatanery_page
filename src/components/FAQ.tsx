import { motion } from 'framer-motion';
import { useState } from 'react';

export default function FAQ() {
	const [toggled, setToggled] = useState(false);

	return (
		<div
			className=" mt-2 py-4 border-b-2 border-secondaryDark cursor-pointer"
			onClick={() => setToggled((prevToggle) => !prevToggle)}
		>
			<div className=" flex justify-between item-center">
				<h3 className="font-semibold">Terapia online funciona?</h3>
				<img src="/down_arrow.png" alt="arrow" width={25} height={10} />
			</div>
			{toggled && (
				<motion.div
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.3 }}
				>
					<p className="pt-2 italic">
						As pesquisas mais recentes mostram que 85% das pessoas preferem a
						terapia online ou a acham tão boa quanto a presencial. Segundo o
						Conselho Federal de Psicologia, o acompanhamento online possui a
						mesma eficácia do acompanhamento presencial, além de ser mais em
						conta e não exigir deslocamentos.
					</p>
				</motion.div>
			)}
		</div>
	);
}
