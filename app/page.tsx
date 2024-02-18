"use client";

import { LogOut, Medal, TrendingUp } from "lucide-react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const value = 0.77;

const leaderboard = [
  {
    rank: "01",
    name: "Name",
    score: "0/233",
  },
  {
    rank: "02",
    name: "Name",
    score: "0/233",
  },
  {
    rank: "03",
    name: "Name",
    score: "0/233",
  },
  {
    rank: "54",
    name: "You",
    score: "0/233",
  },
];

const cards = [
  {
    lastPractice: "Last Practice Linear etc etc",
    date: "28/02/23",
    type: "Practice",
    description: "A description of the above parameter goes here.",
  },
  {
    lastPractice: "Last Practice Linear etc etc",
    date: "28/02/23",
    type: "Mock",
    description: "A description of the above parameter goes here.",
  },
  {
    lastPractice: "Last Practice Linear etc etc",
    date: "28/02/23",
    type: "Title Text Here",
    description: "A description of the above parameter goes here.",
  },
  {
    lastPractice: "Last Practice Linear etc etc",
    date: "28/02/23",
    type: "Title Text Here",
    description: "A description of the above parameter goes here.",
  },
];

export default function Home() {
  return (
    <main>
      <div className="flex min-h-screen md:flex-row flex-col">
        <div className="md:w-1/3 w-full bg-gradient-to-b from-[#374841] to-[#2D2D2D] shadow-xl">
          <section className="px-5 py-3 flex flex-col gap-3">
            <div className="flex items-center">
              <span className="rounded-full bg-white w-4 h-4 inline-block mr-2"></span>
              <span className="text-white text-lg">Chat</span>
              <span className="text-white font-semibold text-lg">SAT</span>
            </div>
            <div className="shadow-md">
              <button className="text-white bg-opacity-10 bg-white py-3 px-4 rounded-xl w-full text-start">
                New Thread
              </button>
            </div>

            <div>
              <div className="flex justify-between gap-2 bg-opacity-10 bg-white py-3 px-4 rounded-xl w-full items-center shadow-md">
                <div>
                  <div
                    style={{ width: "100px", height: "100px", display: "flex" }}
                  >
                    <CircularProgressbarWithChildren
                      value={value}
                      maxValue={1}
                      styles={buildStyles({
                        pathColor: `rgba(163, 230, 53, ${value})`,
                        textColor: "#fff",
                        trailColor: "#374841",
                        backgroundColor: "#3e98c7",
                      })}
                    >
                      <div className="flex flex-col items-center leading-tight">
                        <span className="text-lime-400 font-semibold">4/7</span>
                        <span className="font-semibold text-white text-sm">
                          Streak
                        </span>
                      </div>
                    </CircularProgressbarWithChildren>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="flex gap-1">
                    <Medal className="text-lime-400" />{" "}
                    <span className="text-white">
                      0/233 <span className="text-lime-400 font-bold">XP</span>
                    </span>
                  </span>
                  <span>
                    <button className=" bg-opacity-10 bg-white py-2 px-4 rounded-md  text-lime-400">
                      Take a Quiz
                    </button>
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-opacity-10 bg-white rounded-xl flex flex-col gap-2">
              <div>
                <button className="text-white bg-opacity-15 bg-white py-4 px-4 rounded-xl w-full text-start">
                  Leaderboard
                </button>
              </div>
              <div className="px-3 pb-4 gap-2 flex flex-col">
                {leaderboard.map(({ rank, name, score }) =>
                  name != "You" ? (
                    <div className="text-white bg-opacity-15 bg-white py-3 px-4 rounded-xl w-full flex justify-between">
                      <span className="flex items-center gap-1">
                        {rank}. <Medal />{" "}
                        <span className="rounded-full bg-white w-4 h-4 inline-block"></span>
                        {name}
                      </span>

                      <span>
                        {score}{" "}
                        <span className="text-lime-400 font-bold">XP</span>
                      </span>
                    </div>
                  ) : (
                    <div className="text-white bg-opacity-15 bg-gradient-to-b from-lime-400/50 to-sky-900/30 py-3 px-4 rounded-xl w-full flex justify-between">
                      <span className="flex items-center gap-1">
                        {rank}. <Medal />{" "}
                        <span className="rounded-full bg-white w-4 h-4 inline-block"></span>
                        {name}
                      </span>

                      <span>
                        {score}{" "}
                        <span className="text-lime-400 font-bold">XP</span>
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <span className="rounded-full bg-white w-8 h-8 inline-block"></span>
                <span className="text-white">Name</span>
              </div>
              <div className="flex gap-1 items-center">
                <span>
                  <LogOut className="text-white text-sm w-4" />
                </span>
                <span className="text-white  text-sm">Sign Out</span>
              </div>
            </div>
          </section>
        </div>
        <div className="bg-gradient-to-br from-[#2D2D2D] to-[#2E3732] w-full">
          <section className="md:px-20 py-10 px-4">
            <div className="flex flex-col gap-6 ">
              <div className="flex flex-col leading-tight">
                <div>
                  <span className="text-white font-extrabold text-3xl">
                    Hey,{" "}
                  </span>
                  <span className="font-extrabold text-3xl text-lime-400">
                    Name!
                  </span>
                </div>
                <div>
                  <span className="text-white font-extrabold text-3xl">
                    How's your prep for the{" "}
                  </span>
                  <span className="font-extrabold text-3xl text-lime-400">
                    March SAT
                  </span>
                </div>
              </div>
              <div>
                <div className="md:grid-cols-2 grid-cols-1 grid gap-4 w-max">
                  {cards.map(({ lastPractice, date, type, description }) => (
                    <div className="box flex flex-col bg-[#404040] max-w-[20rem] min-h-[15rem] p-4 rounded-2xl">
                      <div className="flex flex-col leading-tight text-sm text-gray-500">
                        <span>{lastPractice}</span>
                        <span>{date}</span>
                      </div>
                      <div>
                        <div>
                          <TrendingUp className="text-white w-24 h-24" />
                        </div>
                      </div>
                      <div>
                        <span className="text-3xl text-white font-semibold">
                          {type}
                        </span>
                      </div>
                      <div className="leading-none">
                        <span className="text-sm text-white">
                          {description}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
