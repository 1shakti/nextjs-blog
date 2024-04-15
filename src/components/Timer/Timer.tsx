import React, { FC, useEffect, useState } from "react";
import { FiRefreshCcw } from "react-icons/fi";
import { LuAlarmClock } from "react-icons/lu";

type TimerProps = {};

const Timer: FC<TimerProps> = () => {
	const [showTimer, setShowTimer] = useState<boolean>(false);
	const [time, setTime] = useState(0);

	const handleTimer = (): void => {
		setShowTimer((prev) => !prev);
        if(showTimer){
            setTime(0)
        }
	};

	const formatTime = (time: number): string => {
		const hours = Math.floor(time / 36000);
		const minutes = Math.floor((time % 3600) / 60);
		const seconds = time % 60;

		return `${hours < 10 ? "0" + hours : hours}:${
			minutes < 10 ? "0" + minutes : minutes
		}:${seconds < 10 ? "0" + seconds : seconds}`;
	};

    useEffect(() => {
        let intervaldId: NodeJS.Timeout;
        if(showTimer){
            intervaldId = setInterval(() => {
                setTime((time) => time + 1)
            },1000)
        }

        return () => clearInterval(intervaldId);
    },[showTimer])

	return (
		<div>
			{showTimer ? (
				<div className="flex items-center space-x-2 p-1.5 bg-dark-fill-3 rounded hover:bg-dark-fill-2" onClick={handleTimer}>
					<div>{formatTime(time)}</div>
					<FiRefreshCcw />
				</div>
			) : (
				<div
					className=" flex items-center p-1 h-8 hover:bg-dark-fill-3 hover:rounded"
					onClick={handleTimer}
				>
					<LuAlarmClock className="font-medium w-6 h-6" />
				</div>
			)}
		</div>
	);
};
export default Timer;
