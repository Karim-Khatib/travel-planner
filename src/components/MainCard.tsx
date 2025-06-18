import {
    Card,
    
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"

type Props = {
    title?: string
    titleIcon?: React.ReactNode
    description?: string
    action?: React.ReactNode
    content?: React.ReactNode
    footer?: React.ReactNode
    className?:string
}
export default function MainCard(props: Props) {
    return (
        <Card className="w-80 max-w-80">
            <CardHeader>
                <CardTitle>{props.title}{props.titleIcon}</CardTitle>
                <CardDescription>{props.description}</CardDescription>

            </CardHeader>
            <CardContent>
                <p className={cn("text-5xl font-normal text-content-primary",props.className)}>{props.content}</p>
            </CardContent>
            <CardFooter>
                <p className="text-sm ">{props.footer}</p>
            </CardFooter>
        </Card>
    )
}
