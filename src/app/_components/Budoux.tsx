import { loadDefaultJapaneseParser, loadDefaultSimplifiedChineseParser, loadDefaultTraditionalChineseParser } from "budoux";

export const BudouxJP: React.FC<{ str: string }> = ({ str }) => {

  const parser = loadDefaultJapaneseParser();
  const arr = parser.parse(str);

  return (
    <span style={{ wordBreak: 'keep-all', overflowWrap: 'anywhere' }}>
      {arr.map((node) => {
        return (
          <>{node}<wbr /></>
        )
      })}
    </span>
  );
}

export const BudouxSCN: React.FC<{ str: string }> = ({ str }) => {

  const parser = loadDefaultSimplifiedChineseParser();
  const arr = parser.parse(str);

  return (
    <span style={{ wordBreak: 'keep-all', overflowWrap: 'anywhere' }}>
      {arr.map((node) => {
        return (
          <>{node}<wbr /></>
        )
      })}
    </span>
  );
}

export const BudouxTCN: React.FC<{ str: string }> = ({ str }) => {

  const parser = loadDefaultTraditionalChineseParser();
  const arr = parser.parse(str);

  return (
    <span style={{ wordBreak: 'keep-all', overflowWrap: 'anywhere' }}>
      {arr.map((node) => {
        return (
          <>{node}<wbr /></>
        )
      })}
    </span>
  );
}
