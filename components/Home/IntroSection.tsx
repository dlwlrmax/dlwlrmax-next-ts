import React from 'react';

export default function IntroSection(): JSX.Element {
  return (
    <section className="flex items-center">
      <div className="h-4/5 w-full flex flex-col justify-center items-center">
        <div className="text-content w-full">
          <h1 className="text-7xl font-bold">- Dlwlrmax -</h1>
          <p className="text-xl mt-8 w-3/6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ex ipsum, porttitor eu
            convallis a, suscipit sit amet felis. Donec tempor purus sed suscipit iaculis. Morbi
            quis nisi nisi. Sed malesuada urna nulla, ut dictum libero laoreet a. Nulla at feugiat
            erat. Maecenas tempor lacus dolor, vel elementum tellus efficitur ut. Nullam mollis
            felis ut nisl scelerisque cursus.
          </p>
          <div className="text-end w-3/6 mt-6">
            <i className="text-xl">-Smt. Someone-</i>
          </div>
        </div>
        <div className="flex items-end justify-between w-4/5">
          <div
            className={`overflow-hidden opacity-10 absolute top-20`}
            style={{ maxHeight: '150vh' }}>
            <img src="/img/intro2.jpeg" alt="Intro" className="object-cover w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
