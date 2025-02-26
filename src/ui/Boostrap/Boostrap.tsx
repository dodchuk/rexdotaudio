import React from 'react';
import layoutStyles from '@/ui/Pages/Layout/layout.module.scss';
interface IProps {
  children: React.ReactNode;
}

const Bootstrap = ({ children }: IProps) => {
  return (
    <div className={ layoutStyles.page }>
      <div className={ layoutStyles.content }>
        { children }
      </div>
    </div>
  );
}

export default Bootstrap;
