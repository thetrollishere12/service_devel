import { floor } from 'lodash';
import React, { useState } from 'react';

interface IProp {
	change: any,
	term: any,
	index: any,
	sub: any,
}

export default function SelectHours(props: IProp) {
	const interval = 15;
	const count = 60 * 24 / 15;
	const half = count / 2;
	const step = 60 / interval;
	const [from, setFrom] = useState(props.term.from);
	const [to, setTo] = useState(props.term.to);

	const arr = new Array<number>(count);
	for (let i = 0; i < count; i++) {
		arr[i] = i * interval;
	}

	const changeFrom = (e: any) => {
		const { change, term, index, sub } = props;
		if (parseInt(e.target.value) > parseInt(term.to)) {
			// alert("wrong");
			setFrom(from);
		} else {
			term.from = e.target.value;
			change(index, sub, term);
			setFrom(e.target.value);
		}
	}
	const changeTo = (e: any) => {
		const { change, term, index, sub } = props;
		if (parseInt(e.target.value) < parseInt(term.from)) {
			// alert("wrong");
			setTo(to);
		} else {
			term.to = e.target.value;
			change(index, sub, term);
			setTo(e.target.value);
		}
	}

	return (
		<div style={{ display: "contents" }}>
			<select onChange={changeFrom} className="text-xs rounded border-gray-200">
				{

					arr.map((data, i) => i < parseInt(to) &&
						<option key={i} selected={parseInt(from) == i ? true : false} value={i} >{floor((i % half) / step) < 10 && 0}{floor((i % half) / step)} : {floor(i % half) % step * interval < 10 && 0}{floor(i % half) % step * interval} {i < arr.length / 2 ? "AM" : "PM"}</option>
					)
				}
			</select>
			<span className="flex items-center">to</span>
			<select onChange={changeTo} className="text-xs rounded border-gray-200">
				{

					arr.map((data, i) => i > parseInt(from) &&
						<option key={i} selected={parseInt(to) == i ? true : false} value={i} >{floor((i % half) / step) < 10 && 0}{floor((i % half) / step)} : {floor(i % half) % step * interval < 10 && 0}{floor(i % half) % step * interval} {i < arr.length / 2 ? "AM" : "PM"}</option>
					)
				}
			</select>
			<br />
		</div>

	)

}