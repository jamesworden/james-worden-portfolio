import gymRegisterThumbnail from './blog-images/a-nerd-and-his-friend-versus-maximum-gym-capacity/gym-register-thumbnail.png';

interface BlogPostThumbnails {
	[thumbnailId: string]: any;
}

export const blogPostThumbnails: BlogPostThumbnails = {
	'gym-register-thumbnail-id': gymRegisterThumbnail,
};
