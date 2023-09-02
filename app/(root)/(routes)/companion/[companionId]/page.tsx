import prismadb from "@/lib/prismadb";
import CompanionForm from "./components/companion-form";

interface CompanionIdPagesProps {
    params: {
        companionId: string;

    };
};

export default async function CompanionIdPage({params}: CompanionIdPagesProps){
    //Todo: a Checagem de inscrições

    const companion = await prismadb.companion.findUnique({
        where: {
            id: params.companionId,
        }
    });
    
    const categories = await prismadb.category.findMany();

    return(
        <div>
            <CompanionForm
                initialData={companion}
                categories={categories}
            />
        </div>
    )
}