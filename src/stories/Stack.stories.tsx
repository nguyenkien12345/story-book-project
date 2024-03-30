// Dùng /** */ để thêm mô tả 
import type { Meta, StoryObj } from '@storybook/react'
import Stack from './Stack'

// Cung cấp các thông tin về component Stack
const meta: Meta<typeof Stack> = {
    component: Stack,
    title: 'Stack',
    // Cung cấp tài liệu cho Story liên quan đến Stack
    tags: ['autodocs'],
    argTypes: {
        spacing: {
            control: { type: 'number' }, 
            description: 'This is description about prop spacing'
        },
        direction: {
            control: { type: 'radio' }, 
            options: ['row', 'column'],
            description: 'This is description about prop direction'
        },
        wrap: {
            control: { type: 'boolean' },
            description: 'This is description about prop wrap'
        },
        numberOfChildren: {
            control: { type: 'number' },
            description: 'This is description about prop numberOfChildren'
        },
    }
}

export default meta

type Story = StoryObj<typeof meta>

const ExampleLayout = (n: number) => (
    <div
        key={n} 
        style={{
            width: '50px',
            height: '50px',
            backgroundColor: 'red',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}
    >
        {n + 1}
    </div>
)

export const Base: Story = {
    render: (args) => (
       <Stack
        direction={args.direction}
        spacing={args.spacing}
        wrap={args.wrap}
       >
        {[...Array(args.numberOfChildren).keys()].map((n) => (
           ExampleLayout(n)
        ))}
       </Stack>
    )
}

export const RowWrapStack = {
    render: (args) => (
        <Stack
         direction={'row'}
         spacing={2}
         wrap={true}
        >
         {[...Array(40).keys()].map((n) => (
             ExampleLayout(n)
         ))}
        </Stack>
     )
}

export const RowUnwrapStack = {
    render: (args) => (
        <Stack
         direction={'row'}
         spacing={2}
         wrap={false}
        >
         {[...Array(40).keys()].map((n) => (
             ExampleLayout(n)
         ))}
        </Stack>
     )
}

export const ColumnWrapStack = {
    render: (args) => (
        <Stack
         direction={'column'}
         spacing={2}
        >
         {[...Array(10).keys()].map((n) => (
             <div
                 key={n} 
                 style={{
                     width: '50px',
                     height: '50px',
                     backgroundColor: 'red',
                     display: 'flex',
                     justifyContent: 'center',
                     alignItems: 'center',
                 }}
             >
                 {n + 1}
             </div>
         ))}
        </Stack>
     )
}

export const EmptyStack = {
    render: (args) => (
        <Stack>
         {[...Array(0).keys()].map((n) => (
            ExampleLayout(n)
         ))}
        </Stack>
     )
}