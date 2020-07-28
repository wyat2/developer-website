import PropTypes from 'prop-types';
import React from 'react';
import { css } from '@emotion/core';
import { Surface } from '@newrelic/gatsby-theme-newrelic';
import FeatherIcon from '../FeatherIcon';
import NewRelicIcon from '../NewRelicIcon';
import Button from './Button';

const GuideTile = ({
  as: Component = 'div',
  icon,
  duration,
  title,
  description,
  className,
  children,
  alignment,
  featured,
  ...props
}) => (
  <Surface
    {...props}
    as={Component}
    className={className}
    base={Surface.BASE.PRIMARY}
    css={css`
      display: grid;
      grid-template-rows: auto auto 1fr auto;
      border-radius: 0.25rem;
      position: relative;
      padding: 1rem;
      transition: all 0.15s ease-out;

      &:hover {
        transform: translateY(-2px);
        border-color: var(--border-hover-color);
      }

      ${icon &&
      `
        h2 {
          margin-top: 1rem;
        }
      `}

      ${featured &&
      `
          border-color: var(--color-white);

          .dark-mode & {
            border-color: var(--color-dark-100);
            background-color: var(--color-dark-100);
          }

          &:hover {
            transform: unset;
            border-color: inherit;
          }
        `}
    `}
  >
    {icon && (
      <div
        css={css`
          position: absolute;
          top: -2.75rem;
          left: 50%;
          margin-left: -2.75rem;
          width: 5.5rem;
          height: 5.5rem;
          border: 4px solid var(--color-white);
          background-color: var(--color-neutrals-200);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;

          .dark-mode & {
            background-color: var(--color-dark-050);
            ${featured && `border-color: var(--color-dark-100);`}
          }
        `}
      >
        <NewRelicIcon name={icon} size="2.5rem" />
      </div>
    )}
    <div
      css={css`
        font-size: 0.75rem;
        display: flex;
        align-items: center;
        text-align: right;
        color: var(--accent-text-color);
        padding: 0.3rem 0 0.2rem 1.2rem;
        justify-self: end;
      `}
    >
      {duration ? (
        <FeatherIcon
          css={css`
            margin-right: 0.25rem;
          `}
          name="clock"
        />
      ) : (
        <span>&nbsp;</span>
      )}
      {duration}
    </div>
    <h3
      css={css`
        ${alignment === GuideTile.ALIGNMENT.LEFT && `text-align: left;`}
        ${alignment === GuideTile.ALIGNMENT.CENTER && `text-align: center;`}
      `}
    >
      {title}
    </h3>
    <p
      css={css`
        font-size: 0.9rem;
        margin-bottom: 1.5rem;
        color: var(--secondary-text-color);
        flex: 1;

        &:last-child {
          margin-bottom: 0;
        }

        ${alignment === GuideTile.ALIGNMENT.LEFT &&
        `
          text-align: left;
          padding: 0;
        `}
        ${alignment === GuideTile.ALIGNMENT.CENTER &&
        `
          text-align: center;
          padding: 0 0.5rem;
        `}
      `}
    >
      {description}
    </p>
    {children}
  </Surface>
);

GuideTile.Button = Button;

GuideTile.ALIGNMENT = {
  LEFT: 'left',
  CENTER: 'center',
};

GuideTile.propTypes = {
  duration: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  className: PropTypes.string,
  icon: PropTypes.string,
  children: PropTypes.node,
  as: PropTypes.elementType,
  alignment: PropTypes.oneOf(Object.values(GuideTile.ALIGNMENT)),
  featured: PropTypes.bool,
};

GuideTile.defaultProps = {
  alignment: GuideTile.ALIGNMENT.CENTER,
  featured: false,
};

export default GuideTile;
