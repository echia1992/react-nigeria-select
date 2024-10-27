React Nigeria Select 

A React component for selecting Nigerian states and local government areas (LGAs).

## Features

- 🇳🇬 Complete list of Nigerian states and LGAs
- 🎨 Customizable styling
- ⌨️ TypeScript support
- 🔄 Controlled and uncontrolled usage
- 📱 Mobile-friendly
- 🎯 Zero dependencies
- ♿ Accessible

## Installation

```bash
npm install react-nigeria-select
# or
yarn add react-nigeria-select
```
## Demo link https://stateselection-demo.vercel.app/
## Usage

jsx  or tsx
import { NigeriaSelect } from 'react-nigeria-select';

function App() {
  const handleChange = ({ state, lga }) => {
    console.log(`Selected state: ${state}, LGA: ${lga}`);
  };

  return (
    <NigeriaSelect
      onChange={handleChange}
      required
      showLabels
    />
  );
}

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| onChange | (values: SelectionValue) => void | - | Callback when either state or LGA changes |
| onStateChange | (state: string) => void | - | Callback when state changes |
| onLGAChange | (lga: string) => void | - | Callback when LGA changes |
| defaultState | string | - | Initial state value |
| defaultLGA | string | - | Initial LGA value |
| className | string | - | Additional class for wrapper div |
| selectClassName | string | - | Additional class for select elements |
| labelClassName | string | - | Additional class for labels |
| showLabels | boolean | true | Show/hide labels |
| required | boolean | false | Make fields required |
| disabled | boolean | false | Disable both selects |
| loading | boolean | false | Show loading state |

## Using with React Hook Form

```jsx
import { useForm, Controller } from 'react-hook-form';
import { NigeriaSelect } from 'react-nigeria-select';

function Form() {
  const { control } = useForm();

  return (
    <Controller
      name="location"
      control={control}
      render={({ field }) => (
        <NigeriaSelect
          onChange={field.onChange}
          required
        />
      )}
    />
  );
}
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
