<template>
  <div class="logo">
    <!--<div class="Triangle Triangle&#45;&#45;two"/>-->
    <!--<div class="Triangle Triangle&#45;&#45;one"/>-->
    <!--<div class="Triangle Triangle&#45;&#45;three"/>-->
    <!--<div class="Triangle Triangle&#45;&#45;four"/>-->
    <img src="@/static/logo.svg">
  </div>
</template>

<style>
  img {
    /* Start the shake animation and make the animation last for 0.5 seconds */
    animation: shake 3s;
    /* When the animation is finished, start again */
    animation-iteration-count: infinite;

    opacity: 0.8;
  }

  img:hover {
    /* Start the shake animation and make the animation last for 0.5 seconds */
    animation: shake-strong 0.5s;
    /* When the animation is finished, start again */
    animation-iteration-count: infinite;

    opacity: 1;
  }


  @keyframes shake {
    0% { transform:  translate(0px, 0px) rotate(0deg); }
    5% { transform:  translate(3px, 6px) rotate(4deg); }
    10% { transform: translate(7px, 2px) rotate(-1deg); }
    15% { transform: translate(0px, -3px) rotate(-5deg); }
    20% { transform: translate(-4px, -8px) rotate(-2deg); }
    25% { transform: translate(-10px, -2px) rotate(1deg); }
    30% { transform: translate(-5px, -6px) rotate(3deg); }
    35% { transform: translate(1px, 1px) rotate(4deg); }
    40% { transform: translate(3px, -3px) rotate(1deg); }
    45% { transform: translate(5px, -5px) rotate(0deg); }
    50% { transform: translate(9px, 3px) rotate(4deg); }
    55% { transform: translate(4px, 6px) rotate(5deg); }
    60% { transform: translate(4px, -1px) rotate(2deg); }
    65% { transform: translate(-1px, -4px) rotate(1deg); }
    70% { transform: translate(-4px, -6px) rotate(-2deg); }
    75% { transform: translate(2px, 0px) rotate(3deg); }
    80% { transform: translate(5px, 3px) rotate(4deg); }
    85% { transform: translate(9px, 4px) rotate(-1deg); }
    90% { transform: translate(5px, -1px) rotate(1deg); }
    95% { transform: translate(-1px, -4px) rotate(-4deg); }
    100% { transform:translate(-3px, -2px) rotate(1deg); }
  }

  @keyframes shake-strong {
    0% { transform: translate(10px, 7px) rotate(6deg); }
    10% { transform: translate(-9px, -7px) rotate(-2deg); }
    20% { transform: translate(-13px, 0px) rotate(-9deg); }
    30% { transform: translate(9px, 6px) rotate(0deg); }
    40% { transform: translate(8px, -7px) rotate(6deg); }
    50% { transform: translate(-5px, 9px) rotate(-4deg); }
    60% { transform: translate(-8px, 8px) rotate(2deg); }
    70% { transform: translate(4px, 2px) rotate(-5deg); }
    80% { transform: translate(-5px, -5px) rotate(9deg); }
    90% { transform: translate(6px, 9px) rotate(-5deg); }
    100% { transform: translate(8px, -7px) rotate(-1deg); }
  }
</style>
