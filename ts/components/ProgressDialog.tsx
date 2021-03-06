import * as React from 'react';
import { LocalizerType } from '../types/Util';
import { Spinner } from './Spinner';

export type PropsType = {
  readonly i18n: LocalizerType;
};

export const ProgressDialog = React.memo(({ i18n }: PropsType) => {
  return (
    <div className="module-progress-dialog">
      <div className="module-progress-dialog__spinner">
        <Spinner svgSize="normal" size="39px" direction="on-progress-dialog" />
      </div>
      <div className="module-progress-dialog__text">{i18n('updating')}</div>
    </div>
  );
});
