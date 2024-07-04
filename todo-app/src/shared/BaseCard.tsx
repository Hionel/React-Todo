import React from "react";
// import { useOutletContext } from "react-router-dom";

interface IBaseCardProps {
	children: React.ReactNode;
	cardTitle: string;
}

const BaseCard: React.FC<IBaseCardProps> = ({ cardTitle, children }) => {
	return (
		<div className="card displayFlex">
			<section className="card_title_container">
				<h1 className="card_title">{cardTitle}</h1>
			</section>
			{children}
		</div>
	);
};

export default BaseCard;
