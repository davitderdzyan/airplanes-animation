document.addEventListener("DOMContentLoaded", () => {
  const animations = [];
  gsap.registerPlugin(MotionPathPlugin);
  for (let i = 1; i < 5; i++) {
    const animation = gsap.to(`#airplane-${i}`, {
      motionPath: {
        path: `.cls-${i}`,
        align: `.cls-${i}`,
        alignOrigin: [0.5, 0.5],
        autoRotate: true,
      },
      repeat: -1,
      ease: "linear",
      duration: 9 + i,
    });
    animations.push(animation);
  }

  window.addEventListener("beforeunload", (event) => {
    animations.forEach((animation) => animation.kill());
    animations.length = 0;
    event.returnValue = "";
  });
});
