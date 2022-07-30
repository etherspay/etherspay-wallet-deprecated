import React from 'react';

function WalletSteps(props) {
  return (
    <div>
      <p class="text-xs font-medium text-gray-200">
        {props.step}/3 - {props.title}
      </p>
      <div class="mt-1 overflow-hidden bg-gray-500 rounded-full">
        <div
          class={`${
            props.step === 1 ? 'w-1/3' : props.step === 2 ? 'w-2/3' : 'w-full'
          } h-2 bg-emerald-500 rounded-full`}
        ></div>
      </div>
    </div>
  );
}

export default WalletSteps;
