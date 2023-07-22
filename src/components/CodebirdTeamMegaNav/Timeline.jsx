import React from "react";

function Timeline({ events }) {
  return (
    <div className="mx-auto">
      <div className="relative">
        <div
          className="border-l-2 border-gray-300 absolute h-full top-0"
          style={{ left: "50%" }}
        ></div>
        {events.map(function (event, index) {
          return (
            <div key={index} className="flex items-start mb-8">
              <div className="w-6 h-6 bg-blue-500 rounded-full border-2 border-blue-300 z-10"></div>
              <div className="ml-4">
                <p className="text-gray-800 font-semibold">{event.date}</p>
                <p className="text-gray-600">{event.description}</p>
              </div>
              <img
                src={`/eventimg/${event.image}`}
                alt={`Event ${index + 1}`}
                className="ml-4 w-24 h-24 rounded-lg object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Timeline;
