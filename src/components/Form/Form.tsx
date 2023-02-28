import clsx from "clsx";
import * as React from "react";
import {
	useForm,
	UseFormReturn,
	SubmitHandler,
	UseFormProps,
} from "react-hook-form";

type FormProps<TFormValues, Schema> = {
	className?: string;
	onSubmit: SubmitHandler<TFormValues>;
	children: (methods: UseFormReturn<TFormValues>) => React.ReactNode;
	options?: UseFormProps<TFormValues>;
	id?: string;
	schema?: Schema;
};

export const Form = <
	TFormValues extends Record<string, unknown> = Record<string, unknown>,
	Schema
>({
	onSubmit,
	children,
	className,
	options,
	id,
	schema,
}: FormProps<TFormValues, Schema>) => {
	const methods = useForm<TFormValues>({ ...options, resolver: schema });
	return (
		<form
			className={clsx("space-y-6", className)}
			onSubmit={methods.handleSubmit(onSubmit)}
			id={id}
		>
			{children}
		</form>
	);
};
