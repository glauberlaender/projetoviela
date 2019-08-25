/* global document */
import { storiesOf } from '@storybook/html';
import withCode from 'storybook-addon-code';



// Core
import defaultGrid from './markup/default.html';
import container from './markup/container.html';
import columns from './markup/columns.html';
import verticalAlignment from './markup/alignments/vertical-alignment.html';
import horizontalAlignment from './markup/alignments/horizontal-alignment.html';
import noGutters from './markup/helpers/no-gutters.html';
import columnWrapping from './markup/helpers/column-wrapping.html';
import columnBreaks from './markup/helpers/column-breaks.html';
import offsetingColumns from './markup/helpers/offsetting-columns.html';


/**
 * Buttons Stories
 */
storiesOf(`Grid`, module)
  .add('default', () => defaultGrid)
  .addDecorator(withCode(defaultGrid, 'html'))
storiesOf(`Grid`, module)
  .add('container', () => container)
  .addDecorator(withCode(container, 'html'))
storiesOf(`Grid`, module)
  .add('columns', () => columns)
  .addDecorator(withCode(columns, 'html'))

storiesOf(`Grid/alignments`, module)
  .add('vertical', () => verticalAlignment)
  .addDecorator(withCode(verticalAlignment, 'html'))
storiesOf(`Grid/alignments`, module)
  .add('horizontal', () => horizontalAlignment)
  .addDecorator(withCode(horizontalAlignment, 'html'))

storiesOf(`Grid/helpers`, module)
  .add('no gutters', () => noGutters)
  .addDecorator(withCode(noGutters, 'html'))
storiesOf(`Grid/helpers`, module)
  .add('column wrapping', () => columnWrapping)
  .addDecorator(withCode(columnWrapping, 'html'))
storiesOf(`Grid/helpers`, module)
  .add('column breaks', () => columnBreaks)
  .addDecorator(withCode(columnBreaks, 'html'))
storiesOf(`Grid/helpers`, module)
  .add('offsetting columns', () => offsetingColumns)
  .addDecorator(withCode(offsetingColumns, 'html'))
