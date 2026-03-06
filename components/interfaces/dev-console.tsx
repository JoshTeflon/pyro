'use client';

import { useEffect } from 'react';

export default function DevConsole() {
  useEffect(() => {
    const banner = `
░▀█▀░▀█▀░▄▀▀░█▀█░█░█░█▀▄░█▀█
░░█░░░█░░█▀▄░█▀▀░░█░░█▀▄░█░█
░▀▀▀░▀▀▀░░▀░░▀░░░░▀░░▀░▀░▀▀▀

Welcome to ii6 pyro's official website!

Built by JoshTeflon: https://github.com/JoshTeflon
    `;

    console.log(`%c${banner}`, "color:#850a0a;");
  }, []);

  return null;
};