import React from 'react'

// type Props = {
//   title: string;
//   isActive?: boolean;
//   thing: number;
//   thing2: string[];
//   thing3: {};
//   thing4: {
//     name: string;
//   };
//   status: "loading" | "loaded";
// }

type Props = {
  title: string;
  isActive?: boolean;
}

export default function ({ title = "Hello", isActive = true }: Props) {
  return (
    <div>
      <h1>{title}</h1>
      {
        isActive && <h3>Active</h3>
      }
    </div>
  )
}