import { cn } from '@/utils/utils'
import React from 'react'

type IconCompProp = {
  name: 'arrow' | 'google' | 'metamask' | 'settings' | 'wallet' | 'search' | 'home' | 'notification' | 'youtube' | 'instagram' | 'twitter' | 'twitch' | 'tiktok' | 'more' | 'add' | 'gotoarrow' | 'verify' | 'shadow',
  className?: string,
  color?: string
}

const Icon = ({name, className, color}: IconCompProp) => {
    
    if(name==='arrow') return (
        <Arrow className={className} color={color}/>
    )
    if(name==='google') return (
        <Google className={className} color={color}/>
    )
    if(name==='metamask') return (
        <Metamask className={className}/>
    )
    if(name==='settings') return (
        <Settings className={className} color={color}/>
    )
    if(name==='wallet') return (
        <Wallet className={className} color={color}/>
    )
    if(name==='search') return (
        <Search className={className} color={color}/>
    )
    if(name==='home') return (
        <Home className={className} color={color}/>
    )
    if(name==='notification') return (
        <Notification className={className} color={color}/>
    )
    if(name==='youtube') return (
        <Youtube className={className} color={color}/>
    )
    if(name==='instagram') return (
        <Instagram className={className} color={color}/>
    )
    if(name==='twitter') return (
        <Twitter className={className} color={color}/>
    )
    if(name==='twitch') return (
        <Twitch className={className} color={color}/>
    )
    if(name==='tiktok') return (
        <Tiktok className={className} color={color}/>
    )
    if(name==='more') return (
        <More className={className} color={color}/>
    )
    if(name==='add') return (
        <Add className={className} color={color}/>
    )
    if(name==='gotoarrow') return (
        <GoToArrow className={className} color={color}/>
    )
    if(name==='verify') return (
        <Verify className={className} color={color}/>
    )
    if(name==='shadow') return (
        <Shadow className={className}/>
    )

}

function Arrow({className, color}:{ className?: string, color?: string }) {
    return (
    <svg
        className={" text-web-gray w-3 " + className}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 11 18"
    >
        <path
        fill={ color || "currentColor"}
        fillRule="evenodd"
        d="M3.343 9l7.071 7.071L9 17.485 1.222 9.707a1 1 0 010-1.414L9 .515l1.414 1.414L3.343 9z"
        clipRule="evenodd"
        ></path>
    </svg>
    );
}

function Google({className, color}:{ className?: string, color?: string }) {
return (
    <svg
    className={' w-5 ' + className}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 23 23"
    >
    <path
        fill={color || "#FFC107"}
        d="M22.531 9.297h-.906V9.25H11.5v4.5h6.358A6.747 6.747 0 014.75 11.5a6.75 6.75 0 016.75-6.75c1.72 0 3.286.65 4.478 1.71l3.182-3.183A11.198 11.198 0 0011.5.25C5.287.25.25 5.287.25 11.5S5.287 22.75 11.5 22.75s11.25-5.037 11.25-11.25c0-.754-.078-1.49-.219-2.203z"
    ></path>
    <path
        fill={color || "#FF3D00"}
        d="M1.547 6.264l3.697 2.71A6.747 6.747 0 0111.5 4.75c1.72 0 3.286.65 4.478 1.71l3.182-3.183A11.198 11.198 0 0011.5.25c-4.32 0-8.068 2.44-9.953 6.014z"
    ></path>
    <path
        fill={color || "#4CAF50"}
        d="M11.5 22.75c2.906 0 5.546-1.112 7.543-2.92l-3.482-2.947a6.699 6.699 0 01-4.06 1.367 6.747 6.747 0 01-6.348-4.47l-3.668 2.827C3.347 20.25 7.128 22.75 11.5 22.75z"
    ></path>
    <path
        fill={color || "#1976D2"}
        d="M22.531 9.297h-.906V9.25H11.5v4.5h6.358a6.773 6.773 0 01-2.299 3.134l.002-.001 3.482 2.946c-.247.224 3.707-2.704 3.707-8.329 0-.754-.078-1.49-.219-2.203z"
    ></path>
    </svg>
);
}

function Metamask({className}:{ className?: string }) {
return (
    <svg
    className={" w-6 " + className}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 25 23"
    >
    <g clipPath="url(#clip0_40_690)">
        <path
        fill="#E17726"
        d="M24.42 0L13.694 7.79l1.995-4.591L24.421 0z"
        ></path>
        <path
        fill="#E27625"
        d="M.605.01L9.314 3.2l1.894 4.65L.605.01zm19.499 16.556l4.741.088-1.657 5.524-5.785-1.563 2.7-4.05zm-15.207 0l2.69 4.05-5.775 1.562-1.647-5.524 4.732-.088z"
        ></path>
        <path
        fill="#E27625"
        d="M10.95 6.665l.194 6.141-5.798-.258 1.65-2.442.02-.024 3.934-3.417zm3.04-.068l3.994 3.486.02.023 1.65 2.442-5.797.258.133-6.21zm-6.233 9.986l3.166 2.42-3.677 1.743.511-4.163zm9.486 0l.501 4.163-3.667-1.742 3.166-2.421z"
        ></path>
        <path
        fill="#D5BFB2"
        d="M14.158 18.776l3.721 1.768-3.461 1.615.036-1.067-.296-2.316zm-3.317 0l-.284 2.298.023 1.083-3.47-1.613 3.73-1.767z"
        ></path>
        <path
        fill="#233447"
        d="M9.766 13.608l.973 2.006-3.311-.952 2.338-1.054zm5.467 0l2.35 1.054-3.322.952.972-2.005z"
        ></path>
        <path
        fill="#CC6228"
        d="M8.01 16.563l-.535 4.316-2.868-4.222 3.404-.094zm8.98 0l3.404.094-2.88 4.222-.524-4.316zm2.748-4.26l-2.477 2.478-1.91-.856-.915 1.886-.599-3.244 5.9-.263zm-14.477 0l5.902.264-.6 3.244-.914-1.886-1.9.856-2.488-2.477z"
        ></path>
        <path
        fill="#E27525"
        d="M5.094 11.796l2.803 2.79.097 2.755-2.9-5.546zm14.814-.005l-2.905 5.555.11-2.76 2.795-2.796zm-8.882.175l.113.696.279 1.736-.18 5.33-.847-4.282v-.044l.635-3.436zm2.946-.01l.637 3.446v.044l-.85 4.293-.033-1.073-.133-4.3.38-2.41z"
        ></path>
        <path
        fill="#F5841F"
        d="M17.362 14.475l-.095 2.394-2.956 2.26-.598-.414.67-3.386 2.979-.854zm-9.714 0l2.969.854.67 3.386-.598.414-2.957-2.26-.084-2.394z"
        ></path>
        <path
        fill="#C0AC9D"
        d="M6.545 20.016l3.782 1.758-.016-.75.317-.273h3.743l.328.271-.024.75 3.759-1.752-1.83 1.483-2.21 1.49h-3.796l-2.21-1.496-1.843-1.481z"
        ></path>
        <path
        fill="#161616"
        d="M13.887 18.541l.535.371.313 2.454-.453-.376H10.72l-.445.384.303-2.461.535-.372h2.774z"
        ></path>
        <path
        fill="#763E1A"
        d="M23.712.216L25 4.006l-.804 3.834.572.433-.774.58.582.442-.771.689.473.336-1.256 1.44-5.153-1.472-.045-.024L14.11 7.19 23.712.216zm-22.424 0L10.89 7.19l-3.714 3.074-.044.024-5.154 1.472-1.256-1.44.473-.336-.77-.69.58-.44-.786-.582.594-.434L0 4.007 1.288.216z"
        ></path>
        <path
        fill="#F5841F"
        d="M17.616 9.966l5.46 1.56 1.774 5.365h-4.68l-3.224.04 2.345-4.486-1.675-2.48zm-10.232 0l-1.675 2.48 2.345 4.485-3.223-.04H.159l1.764-5.365 5.46-1.56zm8.571-6.793l-1.527 4.048-.324 5.469-.124 1.713-.01 4.379h-2.94l-.01-4.37-.124-1.724-.325-5.467-1.527-4.048h6.911z"
        ></path>
    </g>
    <defs>
        <clipPath id="clip0_40_690">
        <path fill="#fff" d="M0 0H25V23H0z"></path>
        </clipPath>
    </defs>
    </svg>
);
}

function Settings({className, color}:{ className?: string, color?: string }) {
    return (
      <svg
        className={" text-web-gray w-5 " + className}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 26 26"
      >
        <path
          fill={ color || "currentColor"}
          d="M.665 15.037a12.427 12.427 0 010-4.075c1.378.033 2.615-.627 3.096-1.788.482-1.163.073-2.505-.925-3.454A12.428 12.428 0 015.72 2.836c.95.998 2.292 1.406 3.455.925 1.162-.481 1.821-1.72 1.787-3.096a12.428 12.428 0 014.078 0c-.034 1.377.626 2.615 1.787 3.096 1.163.481 2.505.073 3.454-.925a12.428 12.428 0 012.884 2.883c-.998.95-1.406 2.292-.925 3.455.481 1.162 1.72 1.821 3.096 1.787.225 1.35.225 2.728 0 4.078-1.377-.034-2.615.626-3.096 1.787-.481 1.163-.073 2.505.925 3.454a12.43 12.43 0 01-2.883 2.884c-.95-.998-2.292-1.407-3.454-.925-1.163.481-1.822 1.72-1.788 3.096-1.35.224-2.728.224-4.078 0 .034-1.378-.626-2.615-1.787-3.096-1.163-.482-2.505-.073-3.454.925a12.428 12.428 0 01-2.884-2.883c.998-.95 1.407-2.292.925-3.455-.48-1.162-1.72-1.822-3.096-1.789zM13 16.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z"
        ></path>
      </svg>
    );
}

function Wallet({className, color}:{ className?: string, color?: string }) {
    return (
      <svg
        className={" text-web-gray w-5 " + className}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 22 20"
      >
        <path
          fill={ color || "currentColor"}
          d="M19.817 4.5H3.437a.687.687 0 110-1.375h16.5c.38 0 .688-.308.688-.688 0-1.139-.923-2.062-2.063-2.062H2.75A2.75 2.75 0 000 3.125v13.75a2.75 2.75 0 002.75 2.75h17.067c1.204 0 2.183-.925 2.183-2.063v-11c0-1.137-.979-2.062-2.183-2.062zm-1.942 8.938a1.375 1.375 0 110-2.75 1.375 1.375 0 010 2.75z"
        ></path>
      </svg>
    );
}

function Search({className, color}:{ className?: string, color?: string }) {
return (
    <svg
    className={" text-web-gray w-5 " + className}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 22 22"
    >
    <path
        fill={ color || "currentColor"}
        d="M8.48.625a7.854 7.854 0 017.853 7.854 7.873 7.873 0 01-1.885 5.111l.327.327h.954l6.042 6.041-1.813 1.813-6.041-6.042v-.954l-.327-.327a7.878 7.878 0 01-5.11 1.885 7.854 7.854 0 010-15.708zm0 2.417a5.415 5.415 0 00-5.438 5.437 5.415 5.415 0 005.437 5.438 5.415 5.415 0 005.438-5.438 5.415 5.415 0 00-5.438-5.437z"
    ></path>
    </svg>
);
}

function Home({className, color}:{ className?: string, color?: string }) {
    return (
      <svg
        className={" text-web-gray w-5 " + className}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 18 19"
      >
        <path
          fill={ color || "currentColor"}
          d="M7.593.495a2.244 2.244 0 012.812 0l6.75 5.422c.534.428.845 1.077.845 1.764v9.06c0 .6-.237 1.174-.659 1.597A2.246 2.246 0 0115.75 19h-4.5a.963.963 0 01-.964-.968v-6.777H7.714v6.777A.97.97 0 016.75 19h-4.5a2.246 2.246 0 01-1.591-.662A2.263 2.263 0 010 16.741V7.68c0-.686.311-1.335.845-1.763L7.593.495zm1.608 1.512a.32.32 0 00-.402 0L2.05 7.428a.322.322 0 00-.12.253v9.06c0 .178.144.323.321.323h3.536v-6.777a.97.97 0 01.964-.968h4.5a.963.963 0 01.964.968v6.777h3.536a.321.321 0 00.321-.323V7.68a.322.322 0 00-.12-.252L9.2 2.007z"
        ></path>
      </svg>
    );
}

function Notification({className, color}:{ className?: string, color?: string }) {
return (
    <svg
    className={" text-web-gray w-5 " + className}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 22"
    >
    <path
        fill={ color || "currentColor"}
        d="M7.94 1.375c.166-.406.45-.754.818-1a2.238 2.238 0 012.484 0c.367.246.652.594.818 1a7.785 7.785 0 014.125 2.758A7.652 7.652 0 0117.778 8.8v5.166l2.035 3.023a1.093 1.093 0 01-.353 1.554 1.12 1.12 0 01-.571.156h-5.04a3.84 3.84 0 01-1.303 2.36A3.914 3.914 0 0110 22c-.935 0-1.84-.334-2.546-.94A3.84 3.84 0 016.15 18.7H1.111a1.12 1.12 0 01-.98-.58 1.09 1.09 0 01.056-1.13l2.035-3.023V8.801c0-3.546 2.423-6.533 5.718-7.426zM8.429 18.7c.115.322.327.6.609.798a1.679 1.679 0 001.925 0c.282-.197.494-.476.61-.798H8.428zM10 3.302c-1.473 0-2.886.58-3.928 1.61a5.471 5.471 0 00-1.627 3.89V14.3c0 .217-.065.43-.187.61l-1.07 1.59H16.81l-1.07-1.59a1.092 1.092 0 01-.185-.61V8.8a5.471 5.471 0 00-1.628-3.889A5.584 5.584 0 0010 3.302z"
    ></path>
    </svg>
);
}

function Youtube({className, color}:{ className?: string, color?: string }) {
    return (
      <svg
        className={" text-web-gray w-5 " + className}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 23 23"
      >
        <path
          fill={ color || "currentColor"}
          d="M9.2 14.968l5.969-3.468L9.2 8.032v6.936zm13.294-9.052c.15.543.253 1.272.322 2.196.08.925.115 1.723.115 2.417l.069.97c0 2.533-.184 4.394-.506 5.585-.288 1.04-.954 1.71-1.99 2-.54.15-1.529.254-3.047.323a76.169 76.169 0 01-4.129.116l-1.828.07c-4.819 0-7.82-.186-9.005-.51-1.035-.288-1.702-.959-1.989-2-.15-.543-.253-1.271-.322-2.196a27.96 27.96 0 01-.115-2.416L0 11.5c0-2.532.184-4.393.506-5.584.287-1.04.954-1.711 1.99-2 .54-.15 1.529-.254 3.047-.324a76.24 76.24 0 014.128-.115l1.829-.07c4.819 0 7.82.185 9.005.509 1.035.289 1.701.96 1.989 2z"
        ></path>
      </svg>
    );
}

function Instagram({className, color}:{ className?: string, color?: string }) {
  return (
    <svg
      className={" text-web-gray w-5 " + className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill={ color || "currentColor"}
        d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 017.8 2zm-.2 2A3.6 3.6 0 004 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 003.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6zm9.65 1.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z"
      ></path>
    </svg>
  );
}

function Twitter({className, color}:{ className?: string, color?: string }) {
  return (
    <svg
      className={" text-web-gray w-5 " + className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill={ color || "currentColor"}
        d="M22.46 5c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 3.5 17.26 3 16 3c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 8.09 5.11 6.38 3 3.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.2 4.2 0 01-1.93.07 4.28 4.28 0 004 2.98 8.52 8.52 0 01-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 19.29 5.7 20 8.12 20 16 20 20.33 13.46 20.33 7.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"
      ></path>
    </svg>
  );
}

function Twitch({className, color}:{ className?: string, color?: string }) {
  return (
    <svg
      className={" text-web-gray w-6 " + className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill={ color || "currentColor"}
        d="M11.64 5.93h1.43v4.28h-1.43m3.93-4.28H17v4.28h-1.43M7 2L3.43 5.57v12.86h4.28V22l3.58-3.57h2.85L20.57 12V2m-1.43 9.29l-2.85 2.85h-2.86l-2.5 2.5v-2.5H7.71V3.43h11.43v7.86z"
      ></path>
    </svg>
  );
}

function Tiktok({className, color}:{ className?: string, color?: string }) {
  return (
    <svg
      className={" text-web-gray w-5 " + className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill={ color || "currentColor"}
        d="M16.6 5.82A4.278 4.278 0 0115.54 3h-3.09v12.4a2.592 2.592 0 01-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 004.3 1.38V7.3s-1.88.09-3.24-1.48z"
      ></path>
    </svg>
  );
}

function More({className, color}:{ className?: string, color?: string }) {
  return (
    <svg
      className={" text-web-gray w-5 " + className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill={ color || "currentColor"}
        d="M10.8 18.3a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0-6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0-6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
      ></path>
    </svg>
  );
}

function Add({className, color}:{ className?: string, color?: string }) {
  return (
    <svg
      className={" text-web-gray w-5 " + className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 12 12"
    >
      <path
        fill={ color || "currentColor"}
        d="M11.25 6.749h-4.5v4.5h-1.5v-4.5H.75v-1.5h4.5v-4.5h1.5v4.5h4.5v1.5z"
      ></path>
    </svg>
  );
}

function GoToArrow({className, color}:{ className?: string, color?: string }) {
  return (
    <svg
      className={" text-web-accent-green w-3 " + className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 11 11"
    >
      <path
        stroke={ color || "currentColor"}
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M1 9.5h8.5m0 0V1m0 8.5L1 1"
      ></path>
    </svg>
  );
}

function Verify({className, color}:{ className?: string, color?: string }) {
  return (
    <svg
      className={" text-web-accent-green w-6 " + className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill={ color || "currentColor"}
        fillRule="evenodd"
        d="M15.418 5.643a1.25 1.25 0 00-1.34-.555l-1.798.413a1.25 1.25 0 01-.56 0l-1.798-.413a1.25 1.25 0 00-1.34.555l-.98 1.564c-.1.16-.235.295-.395.396l-1.564.98a1.25 1.25 0 00-.555 1.338l.413 1.8a1.25 1.25 0 010 .559l-.413 1.799a1.25 1.25 0 00.555 1.339l1.564.98c.16.1.295.235.396.395l.98 1.564c.282.451.82.674 1.339.555l1.798-.413c.184-.042.376-.042.56 0l1.799.413a1.25 1.25 0 001.339-.555l.98-1.564c.1-.16.235-.295.395-.395l1.565-.98a1.249 1.249 0 00.554-1.34L18.5 12.28a1.249 1.249 0 010-.56l.413-1.799a1.25 1.25 0 00-.554-1.339l-1.565-.98a1.25 1.25 0 01-.395-.395l-.981-1.564zm-.503 4.127a.5.5 0 00-.86-.509l-2.615 4.426-1.579-1.512a.499.499 0 10-.691.722l2.034 1.949a.499.499 0 00.776-.107l2.935-4.969z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

function Shadow({className}:{ className?: string }) {
  return (
    <svg
      className={cn(" w-40 ", className)}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      width="810"
      height="202"
      viewBox="0 0 810 202"
    >
      <ellipse
        cx="462"
        cy="101"
        fill="url(#paint0_radial_311_37)"
        fillOpacity="0.5"
        rx="462"
        ry="101"
      ></ellipse>
      <ellipse
        cx="462"
        cy="89"
        fill="url(#paint1_radial_311_37)"
        fillOpacity="0.5"
        rx="211"
        ry="46"
      ></ellipse>
      <defs>
        <radialGradient
          id="paint0_radial_311_37"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(462 0 0 101 462 101)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#B364FC" stopOpacity="0.35"></stop>
          <stop offset="0.18" stopColor="#B364FC" stopOpacity="0.31"></stop>
          <stop offset="1" stopColor="#0E1015" stopOpacity="0"></stop>
        </radialGradient>
        <radialGradient
          id="paint1_radial_311_37"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(211 0 0 46 462 89)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#B364FC" stopOpacity="0.35"></stop>
          <stop offset="0.18" stopColor="#B364FC" stopOpacity="0.31"></stop>
          <stop offset="1" stopColor="#0E1015" stopOpacity="0"></stop>
        </radialGradient>
      </defs>
    </svg>
  );
}

export default Icon