import React from "react";

type CardProps = {
  children: React.ReactNode;
  title?: string;
  className?: string,
}

export const Card = (props: CardProps) => {
  const {className = '', title, children} = props;
  return (
    <div className={`card shadow-sm ${className}`}>
      <div className="card-body">
        {
          title &&
          <div className="card-title">
            {title}
          </div>
        }
        <hr className="mx-0"/>
        {children}
      </div>
    </div>
  )
}