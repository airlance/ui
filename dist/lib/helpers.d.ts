export declare const throttle: (func: (...args: unknown[]) => void, limit: number) => ((...args: unknown[]) => void);
export declare function debounce<T extends (...args: unknown[]) => unknown>(func: T, wait: number): (...args: Parameters<T>) => void;
export declare function uid(): string;
export declare function getInitials(name: string | null | undefined, count?: number): string;
export declare function toAbsoluteUrl(pathname: string): string;
export declare function timeAgo(date: Date | string): string;
export declare function formatDate(input: Date | string | number): string;
export declare function formatDateTime(input: Date | string | number): string;
