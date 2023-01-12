import {NavigateNext} from '@mui/icons-material'
import {Breadcrumbs, Link, Stack, Typography} from '@mui/material'

export function MuiBreadcrumbs() {
  return (
    <div>
      <Typography variant="h5" aria-label="Breadcrumbs field">
        Breadcrumbs
      </Typography>
      <Stack direction="row" spacing={2}>
        <Breadcrumbs aria-label="breadcrumb" separator="-">
          <Link underline="hover" href="#">
            Home
          </Link>
          <Link underline="hover" href="#">
            Catalog
          </Link>
          <Link underline="hover" href="#">
            Accecories
          </Link>
          <Typography color="text.primary">Shoes</Typography>
        </Breadcrumbs>
      </Stack>

      <Stack direction="row" spacing={2}>
        <Breadcrumbs
          aria-label="breadcrumb"
          separator={<NavigateNext fontSize="small" />}
        >
          <Link underline="hover" href="#">
            Home
          </Link>
          <Typography color="text.primary">Shoes</Typography>
        </Breadcrumbs>
      </Stack>

      <Stack direction="row" spacing={2}>
        <Breadcrumbs
          aria-label="breadcrumb"
          separator={<NavigateNext fontSize="small" />}
          maxItems={2}
          itemsAfterCollapse={2}
          itemsBeforeCollapse={2}
        >
          <Link underline="hover" href="#">
            Home
          </Link>
          <Link underline="hover" href="#">
            Catalog 1
          </Link>
          <Link underline="hover" href="#">
            Catalog 2
          </Link>
          <Link underline="hover" href="#">
            Catalog 3
          </Link>
          <Link underline="hover" href="#">
            Catalog 4
          </Link>
          <Link underline="hover" href="#">
            Catalog 5
          </Link>
          <Typography color="text.primary">Shoes</Typography>
        </Breadcrumbs>
      </Stack>
    </div>
  )
}

MuiBreadcrumbs.propTypes = {}
