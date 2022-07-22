import { parse } from './acorn.min.js';

export const getParameterList = (theFunction) => {
  const functionAsString = theFunction.toString();
  // wrapped in parens to parse function expressions without an error
  const tree = parse('(\n' + functionAsString + '\n)', { ecmaVersion: 2020 });
  const functionNode =
    tree.body[0].type === 'ExpressionStatement'
      ? tree.body[0].expression
      : tree.body[0];

  const paramNames = functionNode.params.map((param) =>
    param.type === 'RestElement'
      ? '...' + param.argument.name
      : param.type === 'AssignmentPattern'
      ? {
          name: param.left.name,
          default:
            param.right.type === 'Literal'
              ? param.right.value
              : '(used default value)',
        }
      : param.type === 'ObjectPattern'
      ? param.properties.map((prop) => {
          if (prop.value && prop.value.type === 'AssignmentPattern') {
            return {
              name: prop.key.name,
              default:
                prop.value.right.type === 'Literal'
                  ? prop.value.right.value
                  : '(used default value)',
            };
          } else {
            return prop.key.name;
          }
        })
      : param.name,
  );

  return paramNames;
};
