export interface MarkdownRemarkNode {
	node: {
		id: number;
		frontmatter: BlogPostFrontmatter;
	};
}

export interface MarkdownRemarkQueryResult {
	allMarkdownRemark: {
		edges: MarkdownRemarkNode[];
	};
	markdownRemark: {
		frontmatter: BlogPostFrontmatter;
		html: string;
		headings: MarkdownRemarkHeading[];
	};
}

export type MarkdownRemarkEdge = {
	node: MarkdownRemarkNode;
};

/**
 * If we end up using frontmatter in different ways per graphql query, we should
 * create and use these kinds of interfaces in the page where we need them, and then
 * make MarkdownRemarkNode use this as a generic type for dynamic queries.
 */
export interface BlogPostFrontmatter {
	date: string;
	slug: string;
	title: string;
	subtitle: string;
	description: string;
	thumbnailId: string;
	githubUrl?: string;
	category?: string;
	keywords?: string;
	featured?: string;
}

export interface MarkdownRemarkHeading {
	id: string;
	value: string;
	depth: number;
}
