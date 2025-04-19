import Button from "@/components/ui/Button";

export default function Hero() {
    return (
        <div>
            <div className="flex flex-col items-center justify-center min-h-screen pt-20">
                <h1 
                    className="text-6xl font-semibold tracking-tighter bg-white text-transparent bg-clip-text text-center"
                >
                    Interface cognition <br />
                    Provider of core technologies for biometrics, enabling global wisdom <br />
                    terminals
                </h1>
                <Button>
                    Understand our products
                </Button>
               
            </div>
        </div>
    )
}