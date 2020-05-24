import React from 'react';
import Atom from './Atom';
import Badge from './Badge';
import Block from './Block';
import Blockquote from './Blockquote';
import Button from './Button';
import Caption from './Caption';
import theme from './themes/default.js';
const Feature = React.lazy(() => import('./Feature'));
const Field = React.lazy(() => import('./Field'));
const Footer = React.lazy(() => import('./Footer'));
const GenericPage = React.lazy(() => import('./GenericPage'));
const GenericTemplate = React.lazy(() => import('./GenericTemplate'));
const Header = React.lazy(() => import('./Header'));
const Heading = React.lazy(() => import('./Heading'));
const HomePage = React.lazy(() => import('./HomePage'));
const HorizontalRule = React.lazy(() => import('./HorizontalRule'));
const Icon = React.lazy(() => import('./Icon'));
const IconButton = React.lazy(() => import('./IconButton'));
const IconLink = React.lazy(() => import('./IconLink'));
const Input = React.lazy(() => import('./Input'));
const Label = React.lazy(() => import('./Label'));
const Link = React.lazy(() => import('./Link'));
const List = React.lazy(() => import('./List'));
const LogoImage = React.lazy(() => import('./LogoImage'));
const Modal = React.lazy(() => import('./Modal'));
const Molecule = React.lazy(() => import('./Molecule'));
const NotFoundPage = React.lazy(() => import('./NotFoundPage'));
const Organism = React.lazy(() => import('./Organism'));
const PageTemplate = React.lazy(() => import('./PageTemplate'));
const Paragraph = React.lazy(() => import('./Paragraph'));
const PreformattedText = React.lazy(() => import('./PreformattedText'));
const PrimaryNavigation = React.lazy(() => import('./PrimaryNavigation'));
const SamplePage = React.lazy(() => import('./SamplePage'));
const Slider = React.lazy(() => import('./Slider'));
const Spinner = React.lazy(() => import('./Spinner'));
const Table = React.lazy(() => import('./Table'));
const TableCell = React.lazy(() => import('./TableCell'));
const TableRow = React.lazy(() => import('./TableRow'));
const Tooltip = React.lazy(() => import('./Tooltip'));

export {
    Atom,
    Badge,
    Block,
    Blockquote,
    Button,
    Caption,
    Feature,
    Field,
    Footer,
    GenericPage,
    GenericTemplate,
    Header,
    Heading,
    HomePage,
    HorizontalRule,
    Icon,
    IconButton,
    IconLink,
    Input,
    Label,
    Link,
    List,
    LogoImage,
    Modal,
    Molecule,
    NotFoundPage,
    Organism,
    PageTemplate,
    Paragraph,
    PreformattedText,
    PrimaryNavigation,
    SamplePage,
    Slider,
    Spinner,
    Table,
    TableCell,
    TableRow,
    Tooltip,
    theme
}