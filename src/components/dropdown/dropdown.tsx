import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import { emphasize } from '@material-ui/core/styles/colorManipulator';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import React, { CSSProperties, RefObject } from 'react';
import Select from 'react-select';
import { ValueContainerProps } from 'react-select/lib/components/containers';
import { ControlProps } from 'react-select/lib/components/Control';
import { MenuProps, NoticeProps } from 'react-select/lib/components/Menu';
import { OptionProps } from 'react-select/lib/components/Option';
import { PlaceholderProps } from 'react-select/lib/components/Placeholder';
import { SingleValueProps } from 'react-select/lib/components/SingleValue';

import { SelectOption } from '../../models';

export const styles = ({ palette, spacing }: Theme) => createStyles({
  root: {
    flexGrow: 1
  },
  input: {
    display: 'flex',
    padding: '0.6rem',
  },
  valueContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flex: 1,
    alignItems: 'center',
    overflow: 'hidden',
  },
  chip: {
    margin: `${spacing.unit / 2}px ${spacing.unit / 4}px`,
  },
  chipFocused: {
    backgroundColor: emphasize(
      palette.type === 'light' ? palette.grey[300] : palette.grey[700],
      0.08,
    ),
  },
  noOptionsMessage: {
    padding: `${spacing.unit}px ${spacing.unit * 2}px`,
  },
  singleValue: {
    fontSize: 16,
  },
  placeholder: {
    paddingLeft: '1rem',
    position: 'absolute',
    left: 2,
    fontSize: 16,
  },
  paper: {
    position: 'absolute',
    zIndex: 1,
    marginTop: spacing.unit,
    left: 0,
    right: 0,
  }
});

interface Currency {
  currencyName: string;
  currencySymbol?: string;
  id: string;
}

export interface DropdownProps extends WithStyles<typeof styles> {
  theme: Theme;
  placeholder: string;
  currencies: Array<Currency>;
  name: string;
  handleChangeCurrency: (value: SelectOption) => void;
}

function NoOptionsMessage(props: NoticeProps<SelectOption>) {
  return (
    <Typography
      color="textSecondary"
      className={props.selectProps.classes.noOptionsMessage}
      {...props.innerProps}>
      {props.children}
    </Typography>
  );
}

function inputComponent({ inputRef, ...props }: { inputRef: RefObject<HTMLInputElement> }) {
  return <div ref={inputRef} {...props} />;
}

function Control(props: ControlProps<SelectOption>) {
  return (
    <TextField
      fullWidth
      variant="outlined"
      InputProps={{
        inputComponent,
        inputProps: {
          className: props.selectProps.classes.input,
          inputRef: props.innerRef,
          children: props.children,
          ...props.innerProps,
        },
      }}
      {...props.selectProps.textFieldProps}
    />
  );
}

function Option(props: OptionProps<SelectOption>) {
  return (
    <MenuItem
      buttonRef={props.innerRef}
      selected={props.isFocused}
      component="div"
      style={{
        fontWeight: props.isSelected ? 500 : 400,
      }}
      {...props.innerProps}>
      {props.children}
    </MenuItem>
  );
}

function Placeholder(props: PlaceholderProps<SelectOption>) {
  return (
    <Typography
      color="textSecondary"
      className={props.selectProps.classes.placeholder}
      {...props.innerProps}>
      {props.children}
    </Typography>
  );
}

function SingleValue(props: SingleValueProps<SelectOption>) {
  return (
    <Typography className={props.selectProps.classes.singleValue} {...props.innerProps}>
      {props.children}
    </Typography>
  );
}

function ValueContainer(props: ValueContainerProps<SelectOption>) {
  return <div className={props.selectProps.classes.valueContainer}>{props.children}</div>;
}

function Menu(props: MenuProps<SelectOption>) {
  return (
    <Paper square className={props.selectProps.classes.paper} {...props.innerProps}>
      {props.children}
    </Paper>
  );
}

const components = {
  Control,
  Menu,
  NoOptionsMessage,
  Option,
  Placeholder,
  SingleValue,
  ValueContainer
};

function Dropdown(props: DropdownProps) {
  const { classes, theme, placeholder, currencies, name, handleChangeCurrency } = props;

  const selectStyles = {
    input: (base: CSSProperties) => ({
      ...base,
      color: theme.palette.text.primary,
      '& input': {
        font: 'inherit',
      },
    }),
  };

  return (
    <div className={classes.root}>
      <Select
        classes={classes}
        styles={selectStyles}
        components={components}
        onChange={handleChangeCurrency}
        options={currencies.map(currency => ({value: name, label: currency.currencyName}))}
        placeholder={placeholder} />
    </div>
  );
}

export default withStyles(styles, { withTheme: true })(Dropdown);
