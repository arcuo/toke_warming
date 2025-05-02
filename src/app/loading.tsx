import { Spinner } from "@/components/spinner";

export default function Loading() {
	return <div className="flex size-full items-center justify-center"><Spinner variant="infinite" size={64} /></div>;
}