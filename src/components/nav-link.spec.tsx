import { describe, expect, it } from 'vitest'
import { OrderStatus } from './order-status'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { NavLink } from './nav-link'
import { MemoryRouter } from 'react-router-dom'


describe('NavLink', () => {
    it('should highlight the nav link when is the current page link', () => {
        const wrapper = render(
        <>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
        </>, {
            wrapper: ({ children }) => {
                return(
                    <MemoryRouter initialEntries={['/about']}>{children}</MemoryRouter>
                )
            }
        })

        expect(wrapper.getByText('Home').dataset.current).toEqual('false')
        expect(wrapper.getByText('About').dataset.current).toEqual('true')
        // wrapper.debug()

    })
})