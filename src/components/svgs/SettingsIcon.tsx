import React from "react";
interface SettingsIconAttributes {
  className: string
}

export const SettingsIcon: React.FC<SettingsIconAttributes> = ({ className = '' }: SettingsIconAttributes) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <g clipPath="url(#clip0_11_313)">
        <path d="M10 12.5C11.3808 12.5 12.5 11.3808 12.5 10C12.5 8.61933 11.3808 7.50004 10 7.50004C8.61933 7.50004 7.50004 8.61933 7.50004 10C7.50004 11.3808 8.61933 12.5 10 12.5Z" stroke="#D6BBFB" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16.1667 12.5C16.0558 12.7514 16.0227 13.0302 16.0717 13.3005C16.1207 13.5709 16.2496 13.8203 16.4417 14.0167L16.4917 14.0667C16.6467 14.2215 16.7696 14.4053 16.8535 14.6076C16.9373 14.81 16.9805 15.0268 16.9805 15.2459C16.9805 15.4649 16.9373 15.6818 16.8535 15.8841C16.7696 16.0864 16.6467 16.2702 16.4917 16.425C16.3369 16.58 16.1531 16.7029 15.9508 16.7868C15.7484 16.8707 15.5316 16.9139 15.3125 16.9139C15.0935 16.9139 14.8766 16.8707 14.6743 16.7868C14.472 16.7029 14.2882 16.58 14.1334 16.425L14.0834 16.375C13.887 16.1829 13.6375 16.0541 13.3672 16.005C13.0969 15.956 12.8181 15.9891 12.5667 16.1C12.3202 16.2057 12.11 16.3811 11.962 16.6047C11.8139 16.8282 11.7344 17.0902 11.7334 17.3584V17.5C11.7334 17.9421 11.5578 18.366 11.2452 18.6785C10.9327 18.9911 10.5087 19.1667 10.0667 19.1667C9.62468 19.1667 9.20076 18.9911 8.8882 18.6785C8.57563 18.366 8.40004 17.9421 8.40004 17.5V17.425C8.39359 17.1492 8.30431 16.8817 8.1438 16.6573C7.98329 16.4329 7.75899 16.2619 7.50004 16.1667C7.24869 16.0558 6.96988 16.0227 6.69955 16.0717C6.42922 16.1207 6.17977 16.2496 5.98337 16.4417L5.93337 16.4917C5.77858 16.6467 5.59477 16.7696 5.39244 16.8535C5.19011 16.9373 4.97323 16.9805 4.75421 16.9805C4.53518 16.9805 4.3183 16.9373 4.11597 16.8535C3.91364 16.7696 3.72983 16.6467 3.57504 16.4917C3.42008 16.3369 3.29715 16.1531 3.21327 15.9508C3.1294 15.7484 3.08623 15.5316 3.08623 15.3125C3.08623 15.0935 3.1294 14.8766 3.21327 14.6743C3.29715 14.472 3.42008 14.2882 3.57504 14.1334L3.62504 14.0834C3.81715 13.887 3.94603 13.6375 3.99504 13.3672C4.04406 13.0969 4.01097 12.8181 3.90004 12.5667C3.7944 12.3202 3.619 12.11 3.39543 11.962C3.17185 11.8139 2.90986 11.7344 2.64171 11.7334H2.50004C2.05801 11.7334 1.63409 11.5578 1.32153 11.2452C1.00897 10.9327 0.833374 10.5087 0.833374 10.0667C0.833374 9.62468 1.00897 9.20076 1.32153 8.8882C1.63409 8.57563 2.05801 8.40004 2.50004 8.40004H2.57504C2.85087 8.39359 3.11838 8.30431 3.34279 8.1438C3.5672 7.98329 3.73814 7.75899 3.83337 7.50004C3.9443 7.24869 3.97739 6.96988 3.92838 6.69955C3.87936 6.42922 3.75049 6.17977 3.55837 5.98337L3.50837 5.93337C3.35341 5.77858 3.23048 5.59477 3.14661 5.39244C3.06273 5.19011 3.01956 4.97323 3.01956 4.75421C3.01956 4.53518 3.06273 4.3183 3.14661 4.11597C3.23048 3.91364 3.35341 3.72983 3.50837 3.57504C3.66316 3.42008 3.84698 3.29715 4.04931 3.21327C4.25164 3.1294 4.46851 3.08623 4.68754 3.08623C4.90657 3.08623 5.12344 3.1294 5.32577 3.21327C5.5281 3.29715 5.71192 3.42008 5.86671 3.57504L5.91671 3.62504C6.11311 3.81715 6.36255 3.94603 6.63288 3.99504C6.90321 4.04406 7.18203 4.01097 7.43337 3.90004H7.50004C7.74651 3.7944 7.95672 3.619 8.10478 3.39543C8.25285 3.17185 8.3323 2.90986 8.33337 2.64171V2.50004C8.33337 2.05801 8.50897 1.63409 8.82153 1.32153C9.13409 1.00897 9.55801 0.833374 10 0.833374C10.4421 0.833374 10.866 1.00897 11.1786 1.32153C11.4911 1.63409 11.6667 2.05801 11.6667 2.50004V2.57504C11.6678 2.8432 11.7472 3.10519 11.8953 3.32876C12.0434 3.55234 12.2536 3.72774 12.5 3.83337C12.7514 3.9443 13.0302 3.97739 13.3005 3.92838C13.5709 3.87936 13.8203 3.75049 14.0167 3.55837L14.0667 3.50837C14.2215 3.35341 14.4053 3.23048 14.6076 3.14661C14.81 3.06273 15.0268 3.01956 15.2459 3.01956C15.4649 3.01956 15.6818 3.06273 15.8841 3.14661C16.0864 3.23048 16.2702 3.35341 16.425 3.50837C16.58 3.66316 16.7029 3.84698 16.7868 4.04931C16.8707 4.25164 16.9139 4.46851 16.9139 4.68754C16.9139 4.90657 16.8707 5.12344 16.7868 5.32577C16.7029 5.5281 16.58 5.71192 16.425 5.86671L16.375 5.91671C16.1829 6.11311 16.0541 6.36255 16.005 6.63288C15.956 6.90321 15.9891 7.18203 16.1 7.43337V7.50004C16.2057 7.74651 16.3811 7.95672 16.6047 8.10478C16.8282 8.25285 17.0902 8.3323 17.3584 8.33337H17.5C17.9421 8.33337 18.366 8.50897 18.6785 8.82153C18.9911 9.13409 19.1667 9.55801 19.1667 10C19.1667 10.4421 18.9911 10.866 18.6785 11.1786C18.366 11.4911 17.9421 11.6667 17.5 11.6667H17.425C17.1569 11.6678 16.8949 11.7472 16.6713 11.8953C16.4477 12.0434 16.2723 12.2536 16.1667 12.5Z" stroke="#D6BBFB" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <defs>
        <clipPath id="clip0_11_313">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}