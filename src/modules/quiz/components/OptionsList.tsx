import { FC, ReactNode } from 'react';
import styles from './QuizStep.module.css';
import { SelectableItem } from '@/components/selectable-item';
import clsx from 'clsx';

type Option = string | { key: string; emoji?: string };

type Props = {
  options: Option[];
  selected: string[];
  isStepOne?: boolean;
  handleSelection: (option: string) => void;
  handleLanguageChange: (lang: string) => void;
  t: (key: string) => string;
  hasCheckbox?: boolean;
  customRender?: (option: string) => ReactNode;
  isBubble?: boolean;
};

export const OptionsList: FC<Props> = ({
  options,
  selected,
  isStepOne,
  handleSelection,
  handleLanguageChange,
  t,
  hasCheckbox,
  customRender,
  isBubble,
}) => {
  const classNameList = customRender
    ? styles.verticalList
    : isBubble
      ? styles.topicList
      : '';

  return (
    <ul className={clsx(styles.list, 'd-flex-center', classNameList)}>
      {options.map((option) => {
        const key = typeof option === 'string' ? option : option.key;
        const isSelected = selected.includes(key);

        return (
          <SelectableItem
            key={key}
            item={key}
            onClick={
              isStepOne
                ? () => handleLanguageChange(key)
                : () => handleSelection(key)
            }
            isChecked={isSelected}
            hasCheckbox={hasCheckbox}
            isBubble={isBubble}
            isSelected={isSelected}
            option={typeof option !== 'string' ? option : undefined}
          >
            {customRender ? (
              <div className="d-flex-center">
                <div className={styles.genderSmile}>{customRender(key)}</div>
                {t(key)}
              </div>
            ) : (
              <span>{t(key)}</span>
            )}
          </SelectableItem>
        );
      })}
    </ul>
  );
};
