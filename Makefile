fmt:
	yarn run prettier-write

fmt-check:
	yarn run prettier-check

install-git-hooks:
	rm -rf .git/hooks && cd .git && ln -s ../.git-hooks hooks

commit-fmt:
	git commit -m "[auto] refactor(style): Reformat (make fmt) using Prettier"
