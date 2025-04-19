type ButtonProps = {
    children: React.ReactNode,
}
export default function Button({children}: ButtonProps) {
    return (
        <div className="mt-9">
            <button className="p-5 text-sm text-white border-2 rounded-full bg-blue-500">{children}</button>
        </div>
    )
}