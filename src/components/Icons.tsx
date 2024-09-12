type Props = {
    className?: string
    icon: 'Collapse' | 'Expand'
}

const Icons = ({ className, icon }: Props) => {
    return (
        <svg className={`mui-icon ${className ? className : ''}`} focusable="false" aria-hidden="true" viewBox="0 0 20 20" data-testid={icon}>
            {icon == 'Collapse' && <path d="M16 16V4h2v12h-2zM6 9l2.501-2.5-1.5-1.5-5 5 5 5 1.5-1.5-2.5-2.5h8V9H6z"></path>}
            {icon == 'Expand' && <path d="M4 16V4H2v12h2zM13 15l-1.5-1.5L14 11H6V9h8l-2.5-2.5L13 5l5 5-5 5z"></path>}
        </svg>
    )
}

export default Icons
