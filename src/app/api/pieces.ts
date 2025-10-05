import { NextResponse } from "next/server";

export async function getPieces() {
	"use server";
	const files = (await fetch(
		"https://api.imagekit.io/v1/files/?path=/pieces/",
		{
			headers: {
				Authorization: `Basic ${Buffer.from(`${process.env.IMAGEKIT_API_KEY}:`).toString("base64")}`,
				"Content-Type": "application/json",
			},
		},
	).then((res) => res.json())) as ImageKitFile[];

	return NextResponse.json({ files: files.map((f) => f) }, { status: 200 });
}

export type ImageKitFile = {
	type: string;
	name: string;
	fileId: string;
	url: string;
	isPublished: boolean;
	createdAt: string;
	updatedAt: string;
	isPrivateFile: boolean;
	tags: string[];
	customCoordinates: string | null;
	fileType: string;
	filePath: string;
	mime: string;
	height: number;
	width: number;
	customMetadata: Partial<{
		description: string;
		name: string;
		medium: string;
	}>;
};
