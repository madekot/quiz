// своя реалилизация пакета classNames

type BooleanClasses = Record<string, string | boolean>

export const csn = (primaryClass: string, secondaryClasses?: string[], booleanClasses?: BooleanClasses): string => {
  return [
    primaryClass,
    ...secondaryClasses || [],
    ...Object.entries(booleanClasses || {})
      .filter(([_, value]) => {
        return Boolean(value);
      })
      .map(([className, _]) => {
        return className;
      }),
  ].join(' ');
};

// classNames('foo', {lex: true, neo: true, dao: false}, ['foo', 'bar', 'baz']) // 'foo lex neo foo bar baz'
