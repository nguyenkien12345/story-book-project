// Dùng /** */ để thêm mô tả 
import type { Meta, StoryObj } from '@storybook/react'
import Light from './Light'

// Cung cấp các thông tin về component Light
const meta: Meta<typeof Light> = {
    component: Light,
    title: 'Light',
    // Cung cấp tài liệu cho Story liên quan đến Light
    tags: ['autodocs'],
    argTypes: {
        // Đối với props variant, khi người dùng tương tác trên ui với controls thì nó sẽ hiển thị ra thẻ select và chỉ cho phép người 
        // dùng chọn những giá trị như red, yellow, green. (Không muốn cho người dùng tự ý truyền những value không hợp lệ)
        variant: {
            control: { type: 'select' },
            options: ['green', 'yellow', 'red']
        },
        // Đối với props text, khi người dùng tương tác trên ui với controls thì nó sẽ hiển thị ra thẻ text để cho phép người dùng nhập giá trị vào
        text: {
            control: { type: 'text' }
        }
    }
}

export default meta

type Story = StoryObj<typeof meta>

// Định nghĩa các kịch bản cho component Light
/** Default Component Light with varian Green, text ''*/
export const Base: Story = {
    // Cung cấp các props mặc định cho Component Light
    args: {}
}

/** Component Light with variant Red, text Red */
export const Red: Story = {
    args: {
        variant: 'red',
        text: 'Red'
    }
}

/** Component Light with variant Yellow, text Yellow */
export const Yellow: Story = {
    args: {
        variant: 'yellow',
        text: 'Yellow'
    }
}

/** Traffic lights */
export const Grouped: Story = {
    render: (args) => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 15, border: '1px solid black', borderRadius: 8, width: 'max-content', padding: 10 }}>
            <Light variant="red" />
            <Light variant="yellow" />
            <Light variant="green" />
        </div>
    )
}